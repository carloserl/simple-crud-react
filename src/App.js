import React from "react";
import {ThemeProvider} from '@material-ui/core/styles'

// Crear archivo con configuración del tema
import theme from './theme'

import User from "./pages/User";
import Nav   from "./components/Nav"

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
      <Nav />
      <User />
    </div>
  </ThemeProvider>

  );
}

export default App;
