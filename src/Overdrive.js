import React, { useState } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";

const Overdrive = styled(Pedal)`
  background: rgb(186, 18, 18);
  background: linear-gradient(
    180deg,
    rgba(186, 18, 18, 1) 0%,
    rgba(235, 76, 76, 1) 100%
  );
`;

const Knob = styled(knob)`
  width: 10px;
`;

const OverdrivePedal = props => {
  const [connected, setConnected] = useState(false);

  const handleToggleOn = () => {
    if (connected) {
      props.player.disconnect(props.overdrive);
      props.player.disconnect(props.bit);
      setConnected(false);
    } else {
      console.log("props.bit :", props.bit);
      props.player.connect(props.overdrive);
      props.player.connect(props.bit);
      setConnected(true);
    }
  };
  const handleGain = event => {
    console.log("props.overdrive :", props.overdrive);
    props.overdrive.distortion = event;
  };
  const handleBit = event => {
    props.bit.bits = event;
  };

  return (
    <Overdrive>
      <ControlContainer>
        <FlexDiv>
          <Knob
            class={"my-knob-class"}
            onChange={handleGain}
            min={0.1}
            max={6}
            step={0.1}
            value={1.5}
          />
          Gain
        </FlexDiv>
        <FlexDiv>
          <Knob
            class={"my-knob-class"}
            onChange={handleBit}
            min={1}
            max={8}
            step={0.1}
            value={8}
          />
          Bits
        </FlexDiv>
      </ControlContainer>
      <Title>Overdrive</Title>
      {connected ? <On /> : <Off />}
      <Toggle onClick={handleToggleOn} />
    </Overdrive>
  );
};

export default OverdrivePedal;
