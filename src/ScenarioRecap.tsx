import { Divider, Typography } from "@mui/material";
import { PredecessorChoice } from "./PredecessorChoice";
import { Scenario } from "./types/Scenario";
import React from "react";
import { ScenarioLink } from "./types/ScenarioLink";
import { scenarios } from "./scenarioList";

type IScenarioRecapProps = {
  scenarioLink: ScenarioLink
}

const ScenarioRecap = ({scenarioLink}: IScenarioRecapProps) => {

  const scenario: Scenario|undefined = scenarios.find(s => s.id === scenarioLink.fromId);
  const [predecessor, setPredecessor] = React.useState<ScenarioLink|null|undefined>(scenario
                                                                          ? scenario.predecessors?.length > 1
                                                                            ? undefined
                                                                            : scenario.predecessors[0]
                                                                          : null
                                                                         );

  // If the predecessor is undefined, ask user to choose
  // If the predecessor is null, there isn't one

  return (
    <>
      {
        scenario && predecessor && <ScenarioRecap scenarioLink={predecessor} />
      }
      {
        scenario && predecessor == undefined && <PredecessorChoice predecessors={scenario.predecessors} setPredecessor={setPredecessor} />
      }       
      <Typography variant="h6" sx={{marginTop: '10px'}}>{scenarioLink.fromId ? `Scenario ${scenarioLink.fromId} - ` : ''}{scenarioLink.fromText}</Typography>
      <Divider />
      {
        typeof scenarioLink.recap == "string"
        ? <Typography sx={{fontWeight: 0, whiteSpace: 'pre-line'}}>{scenarioLink.recap}</Typography>
        : scenarioLink.recap
      }
    </>
  );
};

export { ScenarioRecap }