import { Box, Grid, Typography } from "@mui/material";
import { scenarios } from "./scenarioList";
import { useNavigate } from "react-router";

const ScenarioGrid = () => {
  const navigate = useNavigate();
  
  return (
    <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
      {
        scenarios.sort((a,b) => a.id < b.id ? -1 : 1).map(s => 
          <Grid key={s.id} container size={2} onClick={() => navigate('/scenarios/' + s.id)}
            sx={{ justifyContent: "center", alignItems: "center", margin: '40px', cursor: 'pointer' }}>
            <Box sx={{ border: '1px solid black', borderRadius: '25px', backgroundColor: s.type.color, width: '45px', textAlign: 'center'}}>
              <Typography variant="h4" sx={{fontFamily: 'Gloomhaven', color: s.type.textColor}}>{s.id}</Typography>
            </Box>
          </Grid>
        )
      }
    </Grid>
  );
};

export { ScenarioGrid }