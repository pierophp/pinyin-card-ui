import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import shuffle from 'lodash/shuffle';
import upperFirst from 'lodash/upperFirst';
import React from 'react';
import getConfiguration from '../../helpers/get.configuration';
import useStyles from './Presentation.css';

const Presentation = (props: any) => {
  const [cards, setCards] = React.useState<any[]>([]);
  const { user } = props;

  const currentCardReducer = (state: any, action: any) => {
    if (action === 'previous') {
      if (state === 0) {
        return state;
      }

      return state - 1;
    } else if (action === 'next') {
      if (state >= cards.length - 1) {
        return state;
      }

      return state + 1;
    }
  };

  const [currentCard, dispatchCurrentCard] = React.useReducer(
    currentCardReducer,
    0,
  );

  const classes = useStyles();

  const configuration = getConfiguration();

  const isChinese = ['chs', 'cht'].includes(configuration.learningLanguage);
  const nameField = `name${upperFirst(configuration.learningLanguage)}`;

  const audioField = isChinese
    ? 'audioCh'
    : `audio${upperFirst(configuration.learningLanguage)}`;

  const extraField = isChinese
    ? 'extraCh'
    : `extra${upperFirst(configuration.learningLanguage)}`;

  const genders: any = {
    de_m: 'Der',
    de_f: 'Die',
    de_n: 'Das',
  };

  const previousCard = () => {
    dispatchCurrentCard('previous');
  };

  const nextCard = () => {
    dispatchCurrentCard('next');
  };

  const play = () => {
    const audioElement: HTMLAudioElement = document.getElementById(
      'audio',
    ) as HTMLAudioElement;

    audioElement.play();
  };

  const handleKeyDown = React.useCallback((e) => {
    if (e.code === 'ArrowRight') {
      nextCard();
    } else if (e.code === 'ArrowLeft') {
      previousCard();
    } else if (e.code === 'Space') {
      play();
    }
  }, []);

  const orientation =
    window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

  React.useEffect(() => {
    async function init() {
      setCards(shuffle(props.cards));
    }

    init();
  }, [props]);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    // unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const card = cards[currentCard];
  const showTranslation = false;
  const language = 'pt';

  let genderClass = '';
  if (card && card[extraField]?.gender) {
    const gender = `gender${card[extraField]?.gender.toUpperCase()}`;
    // @ts-ignore
    if (classes[gender]) {
      // @ts-ignore
      genderClass = classes[gender];
    }
  }

  return (
    <div>
      {card && (
        <div
          className={[classes.cardContainer, classes[orientation]].join(' ')}
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className={classes.containerClick}>
            <div className={classes.leftClick} onClick={previousCard}></div>
            <div className={classes.rightClick} onClick={nextCard}></div>
          </div>
          <div className={classes.informationContainer}>
            {showTranslation && (
              <div className={classes.translationTitle}>
                {card[`name${upperFirst(language)}`]
                  ? card[`name${upperFirst(language)}`]
                  : card.nameEn}
              </div>
            )}

            <div className={`${classes.title} ${genderClass}`}>
              {card[extraField] && card[extraField].gender && (
                <span>
                  (
                  {
                    genders[
                      `${configuration.learningLanguage}_${card[extraField].gender}`
                    ]
                  }
                  ){' '}
                </span>
              )}

              {card[nameField]}
            </div>

            {isChinese && (
              <div className={classes.pronunciation}>{card.pinyin}</div>
            )}
            {card[extraField] && card[extraField].pronunciation && (
              <div className={classes.pronunciation}>
                {card[extraField].pronunciation}
              </div>
            )}

            <IconButton color="primary" onClick={play}>
              <PlayCircleOutlineIcon />
            </IconButton>

            {user && user.admin && (
              <IconButton
                color="primary"
                component="a"
                href={`/#/card-update/${card.id}`}
                target="_blank"
              >
                <EditIcon />
              </IconButton>
            )}

            {card[audioField] && (
              <audio src={card[audioField]} autoPlay id="audio"></audio>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;
