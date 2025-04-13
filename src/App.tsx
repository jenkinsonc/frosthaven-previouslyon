import { ScenarioGrid } from "./ScenarioGrid";
import { AppBar, Box, Grid, Link, Toolbar, Typography } from "@mui/material";
import { Outlet, useMatch } from "react-router";

const App = () => {
  const scenarioId = useMatch('/scenarios/:scenarioId');

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{backgroundColor:'#26566e'}}>
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item md={9} xs={12}>
              <Typography variant='h4' component='div' sx={{ flexGrow: 1, fontFamily: 'Gloomhaven', color: '#d8d9d8' }}>
                Frosthaven - Previously On
              </Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography variant="caption">
                Thanks to dwarf74 (/u/dwarfSA) for his <Link sx={{color:'#d8d9d8'}} href='https://www.reddit.com/r/Gloomhaven/comments/1dc93aj/previously_on_frosthaven_a_collection_of_scenario/'>Previously-On guide</Link> and /u/JamesyWamesy1 for the <Link sx={{color:'#d8d9d8'}} href='https://www.reddit.com/r/Gloomhaven/comments/16urnjl/ultimate_frosthaven_unlock_guide_no_spoilers_in/'>Ultimate Unlock Guide</Link>!
              </Typography>
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
    </Box>
    <Box sx={{marginTop: '50px', padding: '50px', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      {
        scenarioId == null
        ? <ScenarioGrid />
        : <Outlet />
      }
    </Box>
    </>
  );
};

export { App }