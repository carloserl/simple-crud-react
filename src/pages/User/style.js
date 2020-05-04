import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const startStyleObj = {
  display: 'flex',
  justifyContent: 'flex-start'
}

export default makeStyles({
  container: {
    height: '72vh',
    flexDirection: 'column',
    ...startStyleObj
  },
  cardContainer: {
    flexDirection: 'column',
    width: 400,
    padding: '2rem',
    ...centeredStyleObj
  },
  title: {
    fontFamily: "Dosis, sans-serif",
    fontSize: '4rem'
  },
  tableContainer: {
    height: '72vh',
  },
  textFieldSearch: {
    width: '90%'
  },
  moviesIcon: {
    fontSize: 70
  },
  searchButton: {
    marginLeft: '.5rem'
  },
  progressContainer: {
    marginLeft: '.5rem'
  },
  buttonsContainer: {
    marginTop: '.5rem'
  }
});
