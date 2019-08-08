import React from "react";
import styled from "styled-components";
import Chorus from "./Chorus";

const PedalBoard = styled.div`
  display: flex;
`;

const Board = props => {
  return (
    <PedalBoard>
      <Chorus />
    </PedalBoard>
  );
};

export default Board;
