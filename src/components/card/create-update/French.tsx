import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import LanguageIcon from '@material-ui/icons/Language';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import React from 'react';

const French = (props: any) => {
  const { classes, handleChange, handleBlurChange, handleForvo, data } = props;

  const audioRef = React.createRef<any>();
  const nameInputRef = React.createRef<any>();
  return (
    <div>
      <TextField
        name="nameFr"
        label="Nome"
        autoComplete="off"
        onChange={handleChange}
        onBlur={e => {
          handleBlurChange(e);
          handleForvo('Fr');
        }}
        value={data.nameFr}
        className={classes.input}
        InputProps={{ inputProps: { tabIndex: 1004 } }}
        inputRef={nameInputRef}
      />

      <IconButton
        color="primary"
        component="a"
        href={`https://translate.google.com.br/#view=home&op=translate&sl=en&tl=fr&text=${data.nameEn}`}
        target="_blank"
        disabled={data.nameEn ? false : true}
        onClick={() => {
          nameInputRef.current.focus();
        }}
      >
        <GTranslateIcon />
      </IconButton>

      <TextField
        name="audioFr"
        label="Áudio"
        autoComplete="off"
        onChange={handleChange}
        value={data.audioFr}
        className={classes.input}
        InputProps={{ tabIndex: 2 }}
      />

      <IconButton
        color="primary"
        component="a"
        href={`https://forvo.com/word/${data.nameFr}/#fr`}
        target="_blank"
        disabled={data.nameFr ? false : true}
      >
        <MusicVideoIcon />
      </IconButton>

      <audio src={data.audioFr} ref={audioRef}></audio>

      <IconButton
        color="primary"
        component="span"
        disabled={data.audioFr ? false : true}
        onClick={() => audioRef.current.play()}
      >
        <PlayCircleOutlineIcon />
      </IconButton>

      <IconButton
        color="primary"
        component="a"
        href={`https://fr.wikipedia.org/wiki/${data.nameFr}`}
        target="_blank"
        disabled={data.nameFr ? false : true}
      >
        <LanguageIcon />
      </IconButton>
    </div>
  );
};

export default French;
