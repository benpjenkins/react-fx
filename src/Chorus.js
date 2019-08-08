import React, { useState } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";

const Chorus = styled(Pedal)`
  background: rgb(33, 80, 223);
  background: linear-gradient(
    180deg,
    rgba(33, 80, 223, 1) 0%,
    rgba(76, 145, 235, 1) 100%
  );
`;

const Knob = styled(knob)`
  width: 10px;
`;

const ChorusPedal = props => {
  const [connected, setConnected] = useState(false);

  const handleToggleOn = () => {
    if (connected) {
      props.player.disconnect(props.chorus);
      props.mic.disconnect(props.chorus);
      setConnected(false);
    } else {
      props.player.connect(props.chorus);
      props.mic.connect(props.chorus);
      setConnected(true);
    }
  };

  const handleDelayTime = event => {
    props.chorus.delayTime = event;
  };

  const handleDepth = event => {
    props.chorus.depth = event;
  };

  const handleFreq = event => {
    props.chorus.frequency.value = event;
  };
  return (
    <Chorus>
      <ControlContainer>
        <FlexDiv>
          <Knob
            name={"delay"}
            class={"my-knob-class"}
            onChange={handleDelayTime}
            min={0}
            max={5}
            step={0.1}
            value={1.5}
          />
          Delay
        </FlexDiv>
        <FlexDiv>
          <Knob
            class={"my-knob-class"}
            onChange={handleDepth}
            min={0}
            max={5}
            step={0.1}
            value={1.5}
          />
          Depth
        </FlexDiv>
        <FlexDiv>
          <Knob
            name={"frequency"}
            class={"my-knob-class"}
            onChange={handleFreq}
            min={0}
            max={5}
            step={0.1}
            value={1.5}
          />
          Frequency
        </FlexDiv>
      </ControlContainer>
      <Title> Chorus </Title>
      {connected ? <On /> : <Off />}
      <Toggle onClick={handleToggleOn} />
    </Chorus>
  );
};

export default ChorusPedal;
