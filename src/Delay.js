import React, { useState } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";

const Delay = styled(Pedal)`
  background: rgb(0, 71, 24);
  background: linear-gradient(
    0deg,
    rgba(0, 71, 24, 1) 0%,
    rgba(9, 34, 0, 1) 100%
  );
`;

const Knob = styled(knob)`
  width: 10px;
`;

const DelayPedal = props => {
  const [connected, setConnected] = useState(false);
  const handleToggleOn = () => {
    if (connected) {
      props.player.disconnect(props.delay);
      props.mic.disconnect(props.delay);
      setConnected(false);
    } else {
      props.player.connect(props.delay);
      props.mic.connect(props.delay);
      setConnected(true);
    }
  };

  const handleDelayTime = event => {
    props.delay.delayTime.value = event;
  };

  const handleFeedback = event => {
    props.delay.feedback.value = event;
  };

  const handleDryWet = event => {
    props.delay.wet.value = event;
  };

  return (
    <Delay>
      <ControlContainer>
        <FlexDiv>
          <Knob
            class={"my-knob-class"}
            onChange={handleDelayTime}
            min={0}
            max={1}
            step={0.1}
            value={0.25}
          />
          Delay Time
        </FlexDiv>
        <FlexDiv>
          <Knob
            class={"my-knob-class"}
            onChange={handleFeedback}
            min={0}
            max={1}
            step={0.1}
            value={0.25}
          />
          Feedback
        </FlexDiv>
        <FlexDiv>
          <Knob
            class={"my-knob-class"}
            onChange={handleDryWet}
            min={0}
            max={1}
            step={0.01}
            value={0.8}
          />
          Dry/Wet
        </FlexDiv>
      </ControlContainer>
      <Title>Ping-Pong</Title>
      {connected ? <On /> : <Off />}
      <Toggle onClick={handleToggleOn} />
    </Delay>
  );
};

export default DelayPedal;
