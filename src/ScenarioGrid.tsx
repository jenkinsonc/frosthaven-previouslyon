import { Box, Grid, Typography } from "@mui/material";
import { scenarios } from "./scenarioList";

type IScenarioGridProps = {
  setScenario: (scenarioId: number) => void
}

const ScenarioGrid = ({setScenario}: IScenarioGridProps) => {

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      {
        scenarios.sort((a,b) => a.id < b.id ? -1 : 1).map(s => 
          <Grid key={s.id} item container direction="row" justifyContent="center" alignItems="center" xs={2} sx={{margin: '40px', cursor: 'pointer'}}
            onClick={() => setScenario(s.id)}>
            <Box sx={{
              border: '1px solid black',
              borderRadius: '25px',
              backgroundColor: s.type.color,
              width: '45px',
              textAlign: 'center'}}>

              <Typography variant="h4" sx={{fontFamily: 'Gloomhaven', color: s.type.textColor}}>{s.id}</Typography>

            </Box>
          </Grid>
        )
      }
    </Grid>
  );
};

export { ScenarioGrid }