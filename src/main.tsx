import { StyledEngineProvider, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createHashRouter, RouterProvider } from "react-router";
import { ScenarioCard } from "./ScenarioCard";


const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: 'Outfit, Arial, Gloomhaven, sans-serif;'
  },

}

const theme = createTheme(themeOptions);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/scenarios/:scenarioId",
        element: <ScenarioCard />
      }
    ]
  },
]);

const initApp = async() => {
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
          {/* <App /> */}
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

initApp();