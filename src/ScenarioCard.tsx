import { Button, Card, CardActions, CardContent, CardHeader, useTheme } from "@mui/material";
import { scenarios } from "./scenarioList";
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import React from "react";
import { PredecessorChoice } from "./PredecessorChoice";
import { ScenarioLink } from "./types/ScenarioLink";
import { ScenarioRecap } from "./ScenarioRecap";

type IScenarioCardProps = {
  scenarioId: number,
  setScenario: (scenarioId: number|null) => void
}

const ScenarioCard = ({scenarioId, setScenario}: IScenarioCardProps) => {

  const theme = useTheme();
  const scenario = scenarios.find(s => s.id == scenarioId)!;
  
  const [predecessor, setPredecessor] = React.useState<ScenarioLink|undefined>(scenario.predecessors.length > 1 ? undefined : scenario.predecessors[0]);

  return (
    <Card sx={{width: '80vw', maxWidth: '80vw'}}>
      <CardHeader
       title={`${scenario.id} - ${scenario.name}`}
       sx={{fontFamily: 'Gloomhaven', backgroundColor:'#432423', color: '#ffffff'}}
       />
      <CardContent sx={{backgroundColor: '#face83'}}>

        {
          scenario && predecessor && <ScenarioRecap scenarioLink={predecessor} />
        }
        {
          scenario && predecessor == undefined
          && <PredecessorChoice predecessors={scenario.predecessors} setPredecessor={setPredecessor} />
        }        

      </CardContent>
      <CardActions sx={{backgroundColor: '#face83'}}>
        <Button sx={{color: theme.palette.text.primary, fontWeight: 'bold' }} size="small" onClick={() => setScenario(null)}><KeyboardDoubleArrowLeft /> Go Back</Button>
      </CardActions>
    </Card>
  );
};

export { ScenarioCard };