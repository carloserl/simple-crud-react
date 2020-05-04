import React from "react";
import { Typography, TextField, Card, Button, Grid } from "@material-ui/core";
import HandleForm from "./HandleForm";
import validate from "./validate";
import styles from "./style";
// import { MovieIcon } from '../../icons';

const FormUser = (props) => {
  const { handleChange, handleSubmit, values, errors, valuesedit, clearData } = HandleForm(
    submit,
    validate,
    props.selected
  );

  function submit() {
    if (valuesedit.id) {
      props.editUser(values);
    } else {
      props.addUser(values);
    }
    clearData()
  }

  const classes = styles();

  return (
    <Card className={classes.cardContainer}>
      <Grid container className={classes.titleGridContainer}>
        <Grid>
          <Typography className={classes.title}>Usuario</Typography>
        </Grid>
      </Grid>

      <TextField
        value={values.user}
        placeholder="Usuario"
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        className={classes.textFieldSearch}
        name="user"
        size={"small"}
        error={errors.user ? true : false}
        helperText={errors.user ? errors.user : ""}
      />
      <TextField
        value={values.name}
        name="name"
        placeholder="Nombre"
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        className={classes.textFieldSearch}
        size={"small"}
        error={errors.name ? true : false}
        helperText={errors.name ? errors.name : ""}
      />
      <TextField
        value={values.lastname}
        name="lastname"
        placeholder="Apellido"
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        className={classes.textFieldSearch}
        size={"small"}
        error={errors.lastname ? true : false}
        helperText={errors.lastname ? errors.lastname : ""}
      />
      <TextField
        value={values.password}
        name="password"
        placeholder="Clave"
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        className={classes.textFieldSearch}
        size={"small"}
        error={errors.password ? true : false}
        helperText={errors.password ? errors.password : ""}
      />
      <Grid className={classes.buttonsContainer}>
        <Button variant="contained"
         onClick={clearData}
        >Cancelar</Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          className={classes.searchButton}
          // size="mediun"
        >
          Guardar
        </Button>
      </Grid>
    </Card>
  );
};

export default FormUser;
