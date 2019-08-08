import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Tone from "tone";

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
  const [playing, setPlaying] = useState(false);
  const [micOn, setMicOn] = useState(false);

  const handlePlay = () => {
    props.player.start();
    setPlaying(true);
  };
  const handleStop = () => {
    props.player.stop();
    setPlaying(false);
  };

  const handleMic = () => {
    if (micOn) {
      props.mic.close();
      setMicOn(false);
      console.log("trying to turn the mic input off");
    } else {
      props.mic.open();
      setMicOn(true);
    }
  };
  return (
    <div>
      <Play onClick={handlePlay}>Play</Play>
      <Stop onClick={handleStop}>Stop</Stop>
      <Mic onClick={handleMic}>Mic</Mic>
    </div>
  );
};

export default Player;
