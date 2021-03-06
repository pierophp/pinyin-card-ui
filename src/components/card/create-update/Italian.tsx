import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import LanguageIcon from '@material-ui/icons/Language';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import React from 'react';

const Italian = (props: any) => {
  const { classes, handleChange, handleBlurChange, handleForvo, data } = props;

  const audioRef = React.createRef<any>();
  const nameInputRef = React.createRef<any>();
  return (
    <div>
      <TextField
        name="nameIt"
        label="Nome"
        autoComplete="off"
        onChange={handleChange}
        onBlur={e => {
          handleForvo('It');
          handleBlurChange(e);
        }}
        value={data.nameIt}
        className={classes.input}
        InputProps={{ inputProps: { tabIndex: 1003 } }}
        inputRef={nameInputRef}
      />

      <IconButton
        color="primary"
        component="a"
        href={`https://translate.google.com.br/#view=home&op=translate&sl=en&tl=it&text=${data.nameEn}`}
        target="_blank"
        disabled={data.nameEn ? false : true}
        onClick={() => {
          nameInputRef.current.focus();
        }}
      >
        <GTranslateIcon />
      </IconButton>

      <TextField
        name="audioIt"
        label="Áudio"
        autoComplete="off"
        onChange={handleChange}
        value={data.audioIt}
        className={classes.input}
        InputProps={{ tabIndex: 2 }}
      />

      <IconButton
        color="primary"
        component="a"
        href={`https://forvo.com/word/${data.nameIt}/#it`}
        target="_blank"
        disabled={data.nameIt ? false : true}
      >
        <MusicVideoIcon />
      </IconButton>

      <audio src={data.audioIt} ref={audioRef}></audio>

      <IconButton
        color="primary"
        component="span"
        disabled={data.audioIt ? false : true}
        onClick={() => audioRef.current.play()}
      >
        <PlayCircleOutlineIcon />
      </IconButton>

      <IconButton
        color="primary"
        component="a"
        href={`https://it.wikipedia.org/wiki/${data.nameIt}`}
        target="_blank"
        disabled={data.nameIt ? false : true}
      >
        <LanguageIcon />
      </IconButton>
    </div>
  );
};

export default Italian;
