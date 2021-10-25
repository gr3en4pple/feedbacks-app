import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

export let theme = createTheme({
  typography: {
    fontFamily: 'Jost',
  },
});
theme = responsiveFontSizes(theme);
