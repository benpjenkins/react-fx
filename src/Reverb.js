import React, { useState } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";

const Reverb = styled(Pedal)`
  background: rgb(73, 72, 72);
  background: linear-gradient(
    357deg,
    rgba(73, 72, 72, 1) 0%,
    rgba(33, 33, 33, 1) 100%
  );
`;
const Knob = styled(knob)`
  width: 10px;
`;

const ReverbPedal = props => {
  const [connected, setConnected] = useState(false);

  const handleDryWet = event => {
    props.reverb.wet.value = event;
  };
  const handleSize = event => {
    props.reverb.roomSize.value = event;
  };

  const handleToggleOn = () => {
    if (connected) {
      props.player.disconnect(props.reverb);
      props.mic.disconnect(props.reverb);
      setConnected(false);
    } else {
      props.player.connect(props.reverb);
      props.mic.connect(props.reverb);
      setConnected(true);
    }
  };
  return (
    <Reverb>
      <ControlContainer>
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
        <FlexDiv>
          <Knob
            class={"my-knob-class"}
            onChange={handleSize}
            min={0}
            max={1}
            step={0.01}
            value={0.8}
          />
          Decay
        </FlexDiv>
      </ControlContainer>
      <Title>Reverb</Title>
      {connected ? <On /> : <Off />}
      <Toggle onClick={handleToggleOn}> </Toggle>
    </Reverb>
  );
};

export default ReverbPedal;
