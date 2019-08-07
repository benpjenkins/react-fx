import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tone from "tone";
import Player from "./Player";
import mp3 from "./Content/feelings.mp3";
import Title from "./Title";
import styled from "styled-components";

const Board = styled.div`
  display: flex;
`;
function App() {
  const player = new Tone.Player(mp3).toMaster();
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Board />
        <Player player={player} />
      </header>
    </div>
  );
}

export default App;
