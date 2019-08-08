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
      props.mic.disconnect(props.wah);
      setConnected(false);
    } else {
      props.player.connect(props.wah);
      props.mic.connect(props.wah);
      setConnected(true);
      props.wah.Q.value = 6;
    }
  };
  const handleFreq = event => {
    props.wah.baseFrequency = event;
  };
  const handleOctaves = event => {
    props.wah.octaves = event;
  };
  const handleSens = event => {
    props.wah.senitivity = event;
  };
  return (
    <AutoWah>
      <ControlContainer>
        <FlexDiv>
          <Knob
            name={"delay"}
            class={"my-knob-class"}
            onChange={handleFreq}
            min={1}
            max={200}
            step={1}
            value={100}
          />
          Freq
        </FlexDiv>
        <FlexDiv>
          <Knob
            name={"octave"}
            class={"my-knob-class"}
            onChange={handleOctaves}
            min={1}
            max={8}
            step={1}
            value={6}
          />
          Octaves
        </FlexDiv>
        <FlexDiv>
          <Knob
            name={"sensitivity"}
            class={"my-knob-class"}
            onChange={handleSens}
            min={-40}
            max={0}
            step={1}
            value={0}
          />
          Sensitivity
        </FlexDiv>
      </ControlContainer>
      <Title>Auto-Wah</Title>
      {connected ? <On /> : <Off />}
      <Toggle onClick={handleToggleOn} />
    </AutoWah>
  );
};

export default WahPedal;
