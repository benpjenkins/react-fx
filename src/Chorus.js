import React, { useContext } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";
import { PedalContext } from "./context/PedalProvider";

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
  const { state, dispatch } = useContext(PedalContext);

  return (
    <Chorus>
      <ControlContainer>
        <FlexDiv>
          <Knob
            name={"delay"}
            class={"my-knob-class"}
            onEnd={event =>
              dispatch({
                type: "SET_POT",
                pedal: "chorus",
                pot: "delayTime",
                value: event
              })
            }
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
            onEnd={event =>
              dispatch({
                type: "SET_POT",
                pedal: "chorus",
                pot: "depth",
                value: event
              })
            }
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
            onEnd={event =>
              dispatch({
                type: "SET_POT",
                pedal: "chorus",
                pot: "frequency",
                value: event
              })
            }
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
