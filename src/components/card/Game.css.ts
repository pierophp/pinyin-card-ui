import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  cardContainer: {
    backgroundColor: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: 'calc(50vh - (56px / 2))',
    width: 'calc(50% - 4px)',
    position: 'relative',
    margin: 'auto',
  },
  cardContainerOption: {
    border: '2px solid #000',
    '&:hover': {
      border: '2px solid #0043ff',
    },
  },
  landscape: {
    backgroundSize: 'auto 50vh',
  },
  portrait: {
    backgroundSize: '50vw auto',
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  informationContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '180px',
    minHeight: '75px',
    textAlign: 'center',
    margin: 'auto',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: '25px',
  },
  translationTitle: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: '25px',
  },
  pinyin: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: '25px',
  },
  containerClick: {
    display: 'flex',
  },

  container: {},

  rightAnswer: {
    color: 'green',
  },
  wrongAnswer: {
    color: 'red',
  },
}));