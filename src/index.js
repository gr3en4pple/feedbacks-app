import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from './Components/Theme';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import StateProvider from './Components/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateProvider>
          <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
              <App />
            </StylesProvider>
          </ThemeProvider>
      </StateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
