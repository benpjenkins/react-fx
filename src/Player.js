import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
// import { initialState, reducer } from "./context/Reducer";
import Tone from "tone";
import mp3 from "./Content/feelings.mp3";
import { PedalContext } from "./context/PedalProvider";

const Play = styled(Button)`
  background-color: green;
`;

const Stop = styled(Button)`
  background-color: Red;
`;

const Mic = styled(Button)`
  background-color: Blue;
`;

const player = new Tone.Player(mp3).toMaster();

const Player = props => {
  const { state, dispatch } = useContext(PedalContext);

  useEffect(() => {
    console.log("state :", state);
    if (state.isPlaying) {
      player.start();
    } else {
      player.stop();
    }
  });

  return (
    <div>
      <Play
        onClick={() =>
          dispatch({
            type: "SET_PLAYING",
            playing: true
          })
        }
      >
        Play
      </Play>
      <Stop
        onClick={() =>
          dispatch({
            type: "SET_PLAYING",
            playing: false
          })
        }
      >
        Stop
      </Stop>
      <Mic
        onClick={() =>
          dispatch({
            type: "SET_SOURCE",
            source: "mic"
          })
        }
      >
        Use Mic
      </Mic>
      <Mic
        onClick={() =>
          dispatch({
            type: "SET_SOURCE",
            source: "mic"
          })
        }
      >
        Use MP3
      </Mic>
    </div>
  );
};

export default Player;
