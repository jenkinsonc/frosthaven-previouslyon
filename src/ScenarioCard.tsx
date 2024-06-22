import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Tooltip, Typography, useTheme } from "@mui/material";
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

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [scenarioId]);

  return (
    <Card sx={{width: '80vw', maxWidth: '80vw'}}>
      <CardHeader
        title={
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
              {`${scenario.id} - ${scenario.name}`}
            </Grid>
            <Grid item>
              <Tooltip title={<Typography variant="body1">{scenario.type.name}</Typography>}>
                <Box sx={{border: `1px solid ${scenario.type.textColor}`, borderRadius:'20px', width:'40px', height: '40px', backgroundColor:scenario.type.color}} />
              </Tooltip>
            </Grid>
          </Grid>
        }
        sx={{fontFamily: 'Gloomhaven', backgroundColor:'#4e9ba9', color: '#ffffff'}}
       />
      <CardContent sx={{backgroundColor: '#f3d3a4'}}>

        {
          scenario && predecessor && <ScenarioRecap scenarioLink={predecessor} />
        }
        {
          scenario && predecessor == undefined
          && <PredecessorChoice predecessors={scenario.predecessors} setPredecessor={setPredecessor} />
        }        

      </CardContent>
      <CardActions sx={{backgroundColor: '#f3d3a4'}}>
        <Button sx={{color: theme.palette.text.primary, fontWeight: 'bold' }} size="small" onClick={() => setScenario(null)}><KeyboardDoubleArrowLeft /> Go Back</Button>
      </CardActions>
    </Card>
  );
};

export { ScenarioCard };