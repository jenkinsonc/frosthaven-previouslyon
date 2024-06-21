import { CssBaseline, StyledEngineProvider, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { createRoot } from "react-dom/client";
import { App } from "./App";


const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#00bcd4'
    // },
    // secondary: {
    //   main: '#fdd835'
    // }
  },
  typography: {
    fontFamily: 'Outfit, Arial, Gloomhaven, sans-serif;'
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Gloomhaven';
  //         // font-style: normal;
  //         // font-display: swap;
  //         // font-weight: 400;
  //       }
  //     `,
  //   },
  // }
}

const theme = createTheme(themeOptions);

const initApp = async() => {
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

initApp();