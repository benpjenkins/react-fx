import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tone from "tone";
import Player from "./Player";
import mp3 from "./Content/feelings.mp3";
import Title from "./Title";
import styled from "styled-components";
import Chorus from "./Chorus";
import Overdrive from "./Overdrive";

const Board = styled.div`
  display: flex;
`;
function App() {
  const player = new Tone.Player(mp3).toMaster();
  const mic = new Tone.UserMedia().toMaster();
  // mic.open().then(function() {
  //   console.log("connected to microphone");
  // });
  const chorus = new Tone.Chorus(1.5, 4.5, 0.7).toMaster();
  const overdrive = new Tone.Distortion(0.4).toMaster();
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Board>
          <Chorus player={player} chorus={chorus} mic={mic} />
          <Overdrive player={player} mic={mic} overdrive={overdrive} />
        </Board>
        <Player player={player} mic={mic} />
      </header>
    </div>
  );
}

export default App;
