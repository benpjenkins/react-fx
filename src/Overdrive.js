import React, { useState } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";

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
      // props.mic.disconnect(props.overdrive);
      setConnected(false);
    } else {
      props.player.connect(props.overdrive);
      // props.mic.connect(props.overdrive);
      setConnected(true);
    }
  };
  const handleGain = event => {
    props.overdrive.distortion = event;
  };
  return (
    <Overdrive>
      <ControlContainer>
        <FlexDiv>
          <Knob
            class={"my-knob-class"}
            onChange={handleGain}
            min={0.1}
            max={3}
            step={0.1}
            value={1.5}
          />
          Gain
        </FlexDiv>
      </ControlContainer>
      <Title>Overdrive</Title>
      <Toggle onClick={handleToggleOn} />
    </Overdrive>
  );
};

export default OverdrivePedal;
