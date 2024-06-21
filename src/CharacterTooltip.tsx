import { Divider, Tooltip, Typography } from "@mui/material";
import { characters } from "./characterList";
import React from "react";

type ICharacterTooltipProps = {
  name: string,
  text: string
}

const CharacterTooltip = ({name, text}: ICharacterTooltipProps) => {

  const char = characters.find(c => c.name == name);

  return (
    <Tooltip sx={{"& .MuiTooltip-arrow": { fontSize: "large"}}} arrow title={
      <React.Fragment>
        <Typography color="inherit">{name}</Typography>
        <Divider sx={{borderColor:'white', marginBottom: '5px'}} />
        <Typography variant="body2">{char?.description}</Typography>
        <Typography variant="overline">{char?.firstAppearance && `First appearance: ${char?.firstAppearance}`}</Typography>
      </React.Fragment>
    }>
      <Typography display="inline" sx={{fontWeight: 'bold'}}>{text}</Typography>
    </Tooltip>
  );
};

export { CharacterTooltip }
