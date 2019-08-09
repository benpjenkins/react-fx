const initialState = {
  audioSource: null,
  chorus: {
    active: false,
    delayTime: 1.5,
    depth: 1.5
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

//  ACTIONS:
//    SET_POT:   pedal[pot] = [value]
//    SET_POT_WITH_VAL:   pedal[pot] = [value]
//    TOGGLE_ACTIVE:  pedal.active = !pedal.active
//                    add or remove from activePedals
//                    audiosource.chain(activePedals)
//    SET_SOURCE: audiosource = mp3 or mic
//
//
//
//
//
//
//
