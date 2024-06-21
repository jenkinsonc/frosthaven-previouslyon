import { Link, Typography } from "@mui/material";
import { ScenarioLink } from "./types/ScenarioLink";
import React from "react";

type IPredecessorChoiceProps = {
  predecessors: ScenarioLink[],
  setPredecessor: (link: ScenarioLink) => void
}

const PredecessorChoice = ({predecessors, setPredecessor}: IPredecessorChoiceProps) => {

  const delimiter: string = predecessors.length > 2 ? ',' : '';

  return (
    <Typography>
      Did you come here from {
        predecessors.map((p, i, a) =>
          <React.Fragment key={p.fromText}>
            <Link sx={{cursor: 'pointer'}} onClick={() => setPredecessor(p)}>{p.fromText}{ p.fromId ? ` (Scenario ${p.fromId})` : ''}</Link>
            {i === a.length -2 ? `${delimiter} or ` : i === a.length - 1 ? '?' : `${delimiter} `}
          </React.Fragment>
        )
      }
    </Typography>
  );
};

export { PredecessorChoice };