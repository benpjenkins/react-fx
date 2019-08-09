import React, { useContext } from "react";
import styled from "styled-components";
import knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal";
import Toggle from "./Toggle";
import { FlexDiv, ControlContainer, Title } from "./Layout";
import { On, Off } from "./Led";
import { PedalContext } from "./context/PedalProvider";

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
  const { dispatch, state } = useContext(PedalContext);

  return (
    <AutoWah>
      <ControlContainer>
        <FlexDiv>
          <Knob
            name={"delay"}
            class={"my-knob-class"}
            onEnd={event =>
              dispatch({
                type: "SET_POT",
                pedal: "wah",
                pot: "baseFrequency",
                value: event
              })
            }
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
            onEnd={event =>
              dispatch({
                type: "SET_POT",
                pedal: "wah",
                pot: "octaves",
                value: event
              })
            }
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
            onEnd={event =>
              dispatch({
                type: "SET_POT",
                pedal: "wah",
                pot: "sensitivity",
                value: event
              })
            }
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
