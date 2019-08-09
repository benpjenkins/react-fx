import React, { useReducer } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";
import { initialState, reducer } from "./context/Reducer";

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
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDryWet = event => {
    props.reverb.wet.value = event;
  };
  const handleSize = event => {
    props.reverb.roomSize.value = event;
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
            value={state.reverb.wet}
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
            value={state.reverb.roomSize}
          />
          Decay
        </FlexDiv>
      </ControlContainer>
      <Title>Reverb</Title>
      {state.reverb.active ? <On /> : <Off />}
      <Toggle
        onClick={() => dispatch({ type: "TOGGLE_ACTIVE", pedal: "reverb" })}
      >
        {" "}
      </Toggle>
    </Reverb>
  );
};

export default ReverbPedal;
