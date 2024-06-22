import React from "react";
import { ScenarioGrid } from "./ScenarioGrid";
import { ScenarioCard } from "./ScenarioCard";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const App = () => {

  const [selectedScenario, setSelectedScenario] = React.useState<number|null>(null);

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{backgroundColor:'#26566e'}}>
        <Toolbar>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1, fontFamily: 'Gloomhaven', color: '#d8d9d8' }}>
            Frosthaven - Previously On
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Box sx={{marginTop: '25px', padding: '50px', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      {
        selectedScenario == null
        ? <ScenarioGrid setScenario={setSelectedScenario} />
        : <ScenarioCard scenarioId={selectedScenario} setScenario={setSelectedScenario} />
      }
    </Box>
    </>
  );
};

export { App }