import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import PhotoIcon from '@material-ui/icons/Photo';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import axios from 'axios';
import React from 'react';
import config from '../config';
import useStyles from './CardCreate.css.js';

const CardCreate = props => {
  const classes = useStyles();
  const [data, setData] = React.useState({
    nameEn: '',
    audioEn: '',
    namePt: '',
    audioPt: '',
    nameCht: '',
    nameChs: '',
    audioCh: '',
    pinyin: '',
    image: '',
  });
  const [category, setCategory] = React.useState({});
  const audioEnRef = React.createRef();
  const audioPtRef = React.createRef();
  const audioChRef = React.createRef();

  const handleChange = e => {
    const { name, value } = e.target;

    const dataCopy = JSON.parse(JSON.stringify(data));

    dataCopy[name] = value;

    setData(dataCopy);
  };

  const handleForvo = async language => {
    let audioLanguage = language;

    if (['Cht', 'Chs'].includes(language)) {
      audioLanguage = 'Ch';
    }

    const audio = data[`audio${audioLanguage}`];
    const word = data[`name${language}`];

    if (audio) {
      return;
    }

    const response = (
      await axios.get(
        `${
          config.pinyinApiUrl
        }/forvo?word=${word}&language=${audioLanguage.toLowerCase()}`
      )
    ).data;

    if (!response.url) {
      return;
    }

    const dataCopy = JSON.parse(JSON.stringify(data));

    dataCopy[`audio${audioLanguage}`] = response.url;

    setData(dataCopy);
  };

  const getPinyin = async () => {
    await axios.post(`${config.pinyinApiUrl}/unihan/to_pinyin_all`, {
      ideograms: [data.nameCht],
    });
  };

  React.useEffect(() => {
    async function init() {
      const response = (
        await axios.get(
          `${config.apiUrl}/category/${props.match.params.category}`
        )
      ).data;
      setCategory(response);
    }

    init();
  }, []);

  const save = async () => {
    const request = data;
    request.categoryId = parseInt(props.match.params.category, 10);

    await axios.post(`${config.apiUrl}/card`, request);
  };

  return (
    <div className={classes.container}>
      <form autoComplete="off">
        <Typography variant="h4" component="h4">
          Add to "{category.nameEn}":
        </Typography>
        <div>
          <TextField
            name="nameEn"
            label="English"
            autoComplete="off"
            autoFocus
            onChange={handleChange}
            onBlur={() => handleForvo('En')}
            value={data.nameEn}
            className={classes.input}
            InputProps={{ tabIndex: '1000' }}
          />

          <TextField
            name="audioEn"
            label="Audio English"
            autoComplete="off"
            onChange={handleChange}
            value={data.audioEn}
            className={classes.input}
            InputProps={{ tabIndex: '1' }}
          />

          <IconButton
            color="primary"
            variant="contained"
            component="a"
            href={`https://forvo.com/word/${data.nameEn}/#en_usa`}
            target="_blank"
            disabled={data.nameEn ? false : true}
          >
            <MusicVideoIcon />
          </IconButton>

          <audio src={data.audioEn} ref={audioEnRef}></audio>

          <IconButton
            color="primary"
            variant="contained"
            component="span"
            disabled={data.audioEn ? false : true}
            onClick={() => audioEnRef.current.play()}
          >
            <PlayCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <TextField
            name="namePt"
            label="Portuguese"
            autoComplete="off"
            onChange={handleChange}
            onBlur={() => handleForvo('Pt')}
            value={data.namePt}
            className={classes.input}
            InputProps={{ tabIndex: '1001' }}
          />

          <IconButton
            color="primary"
            variant="contained"
            component="a"
            href={`https://translate.google.com.br/#view=home&op=translate&sl=en&tl=pt&text=${data.nameEn}`}
            target="_blank"
            disabled={data.nameEn ? false : true}
          >
            <GTranslateIcon />
          </IconButton>

          <TextField
            name="audioPt"
            label="Audio Portuguese"
            autoComplete="off"
            onChange={handleChange}
            value={data.audioPt}
            className={classes.input}
            InputProps={{ tabIndex: '2' }}
          />

          <IconButton
            color="primary"
            variant="contained"
            component="a"
            href={`https://forvo.com/word/${data.namePt}/#pt`}
            target="_blank"
            disabled={data.namePt ? false : true}
          >
            <MusicVideoIcon />
          </IconButton>

          <audio src={data.audioPt} ref={audioPtRef}></audio>

          <IconButton
            color="primary"
            variant="contained"
            component="span"
            disabled={data.audioPt ? false : true}
            onClick={() => audioPtRef.current.play()}
          >
            <PlayCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <TextField
            name="nameCht"
            label="Chinese (Trad.)"
            autoComplete="off"
            onChange={handleChange}
            onBlur={() => handleForvo('Cht')}
            value={data.nameCht}
            className={classes.input}
          />

          <IconButton
            color="primary"
            variant="contained"
            component="a"
            href={`https://translate.google.com.br/#view=home&op=translate&sl=en&tl=zh-TW&text=${data.nameEn}`}
            target="_blank"
            disabled={data.nameEn ? false : true}
          >
            <GTranslateIcon />
          </IconButton>

          <TextField
            name="nameChs"
            label="Chinese (Simp.)"
            autoComplete="off"
            onChange={handleChange}
            onBlur={() => handleForvo('Chs')}
            value={data.nameChs}
            className={classes.input}
          />
          <IconButton
            color="primary"
            variant="contained"
            component="a"
            href={`https://translate.google.com.br/#view=home&op=translate&sl=en&tl=zh-CN&text=${data.nameEn}`}
            target="_blank"
            disabled={data.nameEn ? false : true}
          >
            <GTranslateIcon />
          </IconButton>

          <TextField
            name="pinyin"
            label="Pinyin"
            autoComplete="off"
            onChange={handleChange}
            value={data.pinyin}
            className={classes.input}
          />

          <TextField
            name="audioCh"
            label="Audio Chinese"
            autoComplete="off"
            onChange={handleChange}
            value={data.audioCh}
            className={classes.input}
          />

          <IconButton
            color="primary"
            variant="contained"
            component="a"
            href={`https://forvo.com/word/${data.nameCht || data.nameChs}/#zh`}
            target="_blank"
            disabled={data.nameCht || data.nameChs ? false : true}
          >
            <MusicVideoIcon />
          </IconButton>

          <audio src={data.audioCh} ref={audioChRef}></audio>

          <IconButton
            color="primary"
            variant="contained"
            component="span"
            disabled={data.audioCh ? false : true}
            onClick={() => audioChRef.current.play()}
          >
            <PlayCircleOutlineIcon />
          </IconButton>

          {data.nameCht && (
            <a href="javascript:void(0)" onClick={getPinyin}>
              Get Pinyin
            </a>
          )}
        </div>

        <div>
          <TextField
            name="image"
            label="Image"
            autoComplete="off"
            onChange={handleChange}
            value={data.image}
            className={classes.input}
          />

          <IconButton
            color="primary"
            variant="contained"
            component="a"
            href={`https://www.google.com/search?q=${data.nameEn}&tbm=isch&sxsrf=ACYBGNTvB-DW6ELIKgZ60J2gwqZwMfTO1Q:1579728976811&source=lnt&tbs=isz:l&sa=Xbiw=1280&bih=662&dpr=1`}
            target="_blank"
            disabled={data.nameEn ? false : true}
            size="large"
          >
            <PhotoIcon />
          </IconButton>
        </div>
        <div>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>
        </div>

        <div>
          <br />
          <Button variant="contained" onClick={save}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CardCreate;
