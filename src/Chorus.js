import React, { useReducer } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";
import { initialState, reducer } from "./context/Reducer";

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
  const [state, dispatch] = useReducer(reducer, initialState);

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
            value={state.chorus.delayTime}
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
            value={state.chorus.depth}
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
            value={state.chorus.frequency}
          />
          Frequency
        </FlexDiv>
      </ControlContainer>
      <Title> Chorus </Title>
      {state.chorus.active ? <On /> : <Off />}
      <Toggle
        onClick={() => dispatch({ type: "TOGGLE_ACTIVE", pedal: "chorus" })}
      />
    </Chorus>
  );
};

export default ChorusPedal;
