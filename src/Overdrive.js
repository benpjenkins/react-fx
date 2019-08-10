import React, { useContext } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";
import { PedalContext } from "./context/PedalProvider";

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
  const { dispatch, state } = useContext(PedalContext);

  return (
    <Overdrive>
      <ControlContainer>
        <FlexDiv>
          <Knob
            class={"my-knob-class"}
            onEnd={event =>
              dispatch({
                type: "SET_POT",
                pedal: "overdrive",
                pot: "distortion",
                value: event
              })
            }
            min={0.1}
            max={3}
            step={0.1}
            value={state.overdrive.distortion}
          />
          Gain
        </FlexDiv>
      </ControlContainer>
      <Title>Overdrive</Title>
      {state.overdrive.active ? <On /> : <Off />}
      <Toggle
        onClick={() => dispatch({ type: "TOGGLE_ACTIVE", pedal: "overdrive" })}
      />
    </Overdrive>
  );
};

export default OverdrivePedal;
