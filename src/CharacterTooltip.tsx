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
        <Typography component={'span'} color="inherit">{name}</Typography>
        <Divider sx={{borderColor:'white', marginBottom: '5px'}} />
        <Typography component={'span'} variant="body2">{char?.description}</Typography>
        <br/>
        <Typography component={'span'} variant="overline">{char?.firstAppearance && `First appearance: ${char?.firstAppearance}`}</Typography>
      </React.Fragment>
    }>
      <Typography component={'span'} display="inline" sx={{fontWeight: 'bold'}}>{text}</Typography>
    </Tooltip>
  );
};

export { CharacterTooltip }
