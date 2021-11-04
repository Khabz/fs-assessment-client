import React from "react";
import { Box, BoxTitle, BoxText } from "../../pages/People/people.styles";
import { IPerson } from "../../interfaces/People/person.interface";

interface Props {
  person: IPerson 
}

export default function Person(props: Props) {
    const { person } = props;

    return (
      <Box>
        <BoxTitle>{person.name}</BoxTitle>
        <BoxText>{person.gender}</BoxText>
      </Box>
    )
}