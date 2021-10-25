import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from './Components/Theme';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import StateProvider from './Components/StateProvider';
import ClickProvider from './Components/ClickProvider';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateProvider>
        <ClickProvider>
          <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
              <App />
            </StylesProvider>
          </ThemeProvider>
        </ClickProvider>
      </StateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
