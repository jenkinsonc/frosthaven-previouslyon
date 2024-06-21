import React from "react";
import { ScenarioGrid } from "./ScenarioGrid";
import { ScenarioCard } from "./ScenarioCard";
import { Box } from "@mui/material";

const App = () => {

  const [selectedScenario, setSelectedScenario] = React.useState<number|null>(null);

  return (
    <Box sx={{padding: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      {
        selectedScenario == null
        ? <ScenarioGrid setScenario={setSelectedScenario} />
        : <ScenarioCard scenarioId={selectedScenario} setScenario={setSelectedScenario} />
      }
    </Box>
  );
};

export { App }