import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import styles from "./style";

const Nav = () => {

    const classes = styles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Crud Simple</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </React.Fragment>
    )
}

export default Nav
