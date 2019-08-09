export const initialState = {
  audioSource: null,
  chorus: {
    active: false,
    delayTime: 1.5,
    depth: 1.5,
    frequency: 1.5
  },
  overdrive: {
    active: false,
    distortion: 1.5
  },
  delay: {
    active: false,
    delayTime: 0.25,
    feedback: 0.25,
    wet: 0.8
  },
  reverb: {
    active: false,
    wet: 0.8,
    roomSize: 0.8
  },
  wah: {
    active: false,
    baseFrequency: 100,
    octaves: 6,
    sensitivity: 0
  },
  activePedals: [],
  pedalOrder: []
};

export const reducer = (state, action) => {
  // console.log("state :", state);
  console.log("action :", action);
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
    case "SET_SOURCE":
      return { ...state, source: action.source };
    default:
      return state;
  }
};
//  ACTIONS:
//    SET_POT:   pedal[pot] = [value]
//    SET_POT_WITH_VAL:   pedal[pot] = [value]
//    TOGGLE_ACTIVE:  pedal.active = !pedal.active
//                    add or remove from activePedals
//                    audiosource.chain(activePedals)
//    SET_SOURCE: audiosource = mp3 or mic
//
//   should this all be one big object or are the benefits from isolating the discrete parts of it?
//
//   setting up a file structure for success.  where do the reducer, the state, and the pieces provided by tone live?
//
//
//
