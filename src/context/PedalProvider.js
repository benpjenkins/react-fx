import React, { useReducer } from "react";

export const PedalContext = React.createContext();

const SET_POT = "SET_POT";
const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";
const SET_PLAYING = "SET_PLAYING";
const SET_SOURCE = "SET_SOURCE";

export const setPot = (pot, pedal) => ({
  type: SET_POT,
  pot,
  pedal
});

export const toggleActive = pedal => ({
  type: TOGGLE_ACTIVE,
  pedal
});

export const setPlaying = playing => ({
  type: SET_PLAYING,
  playing
});

export const setSource = source => ({
  type: SET_SOURCE,
  source
});

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POT":
      return {
        ...state,
        [action.pedal]: {
          ...state[action.pedal],
          [action.pot]: action.value
        }
      };
    case "TOGGLE_ACTIVE":
      return {
        ...state,
        [action.pedal]: {
          ...state[action.pedal],
          active: !state[action.pedal].active
        }
      };
    //CHANGE_ORDER
    case "SET_PLAYING":
      return { ...state, isPlaying: action.playing };
    case "SET_SOURCE":
      return { ...state, source: action.source };
    default:
      return state;
  }
};

const initialState = {
  isPlaying: false,
  audioSource: null,
  chorus: {
    order: 1,
    active: false,
    delayTime: 1.5,
    depth: 1.5,
    frequency: 1.5
  },
  overdrive: {
    order: 2,
    active: false,
    distortion: 1
  },
  delay: {
    order: 3,
    active: false,
    delayTime: 0.25,
    feedback: 0.25,
    wet: 0.8
  },
  reverb: {
    order: 4,
    active: false,
    wet: 0.8,
    roomSize: 0.8
  },
  wah: {
    order: 5,
    active: false,
    baseFrequency: 100,
    octaves: 6,
    sensitivity: 0
  }
};

const PedalProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PedalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PedalContext.Provider>
  );
};

export default PedalProvider;
