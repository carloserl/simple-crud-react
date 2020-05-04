import { makeStyles } from '@material-ui/styles';


export default makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar, // min-height: 56px;
    marginBottom: "1rem", // margen opcional
  },
}));