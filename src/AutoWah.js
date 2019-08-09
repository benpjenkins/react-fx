import React, { useReducer } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";
import { initialState, reducer } from "./context/Reducer";

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
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFreq = event => {
    props.wah.baseFrequency = event;
  };
  const handleOctaves = event => {
    props.wah.octaves = event;
  };
  const handleSens = event => {
    props.wah.sensitivity = event;
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
            value={state.wah.baseFrequency}
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
            value={state.wah.octaves}
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
            value={state.wah.sensitivity}
          />
          Sensitivity
        </FlexDiv>
      </ControlContainer>
      <Title>Auto-Wah</Title>
      {state.wah.active ? <On /> : <Off />}
      <Toggle
        onClick={() => dispatch({ type: "TOGGLE_ACTIVE", pedal: "wah" })}
      />
    </AutoWah>
  );
};

export default WahPedal;
