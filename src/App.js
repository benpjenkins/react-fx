import React, { useState } from "react";
import "./App.css";
import Player from "./Player";
import PedalProvider from "./context/PedalProvider";
import Title from "./Title";
import styled from "styled-components";
import Chorus from "./Chorus";
import Overdrive from "./Overdrive";
import Reverb from "./Reverb";
import Delay from "./Delay";
import Wah from "./AutoWah";

const Board = styled.div`
  display: flex;
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PedalProvider>
          <Title />
          <Board>
            <Chorus />
            <Overdrive />
            <Delay />
            <Reverb />
            <Wah />
          </Board>
          <Player />
        </PedalProvider>
      </header>
    </div>
  );
}

export default App;
