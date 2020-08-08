import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// React Router Dom
import { BrowserRouter as Router } from 'react-router-dom'

// Chakra UI
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from "@chakra-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <Router>
          <App />
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
