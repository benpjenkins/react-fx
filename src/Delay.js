import React, { useReducer } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";
import { initialState, reducer } from "./context/Reducer";

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
  const [state, dispatch] = useReducer(reducer, initialState);

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
            value={state.delay.delayTime}
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
            value={state.delay.feedback}
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
            value={state.delay.wet}
          />
          Dry/Wet
        </FlexDiv>
      </ControlContainer>
      <Title>Ping-Pong</Title>
      {state.delay.active ? <On /> : <Off />}
      <Toggle
        onClick={() => dispatch({ type: "TOGGLE_ACTIVE", pedal: "delay" })}
      />
    </Delay>
  );
};

export default DelayPedal;
