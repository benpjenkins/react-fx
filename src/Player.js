import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import Tone from "tone";
import mp3 from "./Content/feelings.mp3";
import { PedalContext } from "./context/PedalProvider";
import { handleStateChange } from "./tone/Audio";

const Play = styled(Button)`
  background-color: green;
`;

const Stop = styled(Button)`
  background-color: Red;
`;

const Mic = styled(Button)`
  background-color: Blue;
`;

const Player = props => {
  const { state, dispatch } = useContext(PedalContext);

  useEffect(() => {
    handleStateChange(state);
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
