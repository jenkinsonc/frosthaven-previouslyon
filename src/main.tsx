import { StyledEngineProvider, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { createRoot } from "react-dom/client";
import { App } from "./App";


const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: 'Outfit, Arial, Gloomhaven, sans-serif;'
  },

}

const theme = createTheme(themeOptions);

const initApp = async() => {
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

initApp();