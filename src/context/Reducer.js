export const initialState = {
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
    distortion: 1.5
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
