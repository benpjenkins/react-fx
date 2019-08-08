import React, { useState } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";

const AutoWah = styled(Pedal)`
  background: rgb(55, 0, 60);
  background: linear-gradient(
    176deg,
    rgba(55, 0, 60, 1) 0%,
    rgba(31, 0, 34, 1) 100%
  );
`;

const Knob = styled(knob)`
  width: 10px;
`;

const WahPedal = props => {
  const [connected, setConnected] = useState(false);

  const handleToggleOn = () => {
    if (connected) {
      props.player.disconnect(props.wah);
      setConnected(false);
    } else {
      props.player.connect(props.wah);
      setConnected(true);
    }
  };
  const handleFreq = event => {};
  return (
    <AutoWah>
      <ControlContainer>
        <FlexDiv>
          <Knob
            name={"delay"}
            class={"my-knob-class"}
            onChange={handleFreq}
            min={0}
            max={5}
            step={0.1}
            value={1.5}
          />
        </FlexDiv>
      </ControlContainer>
      <Title>Auto-Wah</Title>
      {connected ? <On /> : <Off />}
      <Toggle onClick={handleToggleOn} />
    </AutoWah>
  );
};

export default WahPedal;
