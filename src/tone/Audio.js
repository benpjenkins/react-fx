// import { useRef } from "react";
import Tone from "tone";
import mp3 from "./feelings.mp3";

const player = new Tone.Player(mp3);
const mic = new Tone.UserMedia();
const chorus = new Tone.Chorus(1.5, 4.5, 0.7);
const reverb = new Tone.Freeverb(0.8);
const delay = new Tone.PingPongDelay(0.25, 0.5);
const wah = new Tone.AutoWah(100, 6, 0);
const overdrive = new Tone.Distortion(0.4);

player.chain(overdrive, chorus, reverb, delay, wah, Tone.Master);

let alreadyPlaying = false;
export const handleStateChange = state => {
  //update the value for each parameter on each effect
  chorus.delayTime = state.chorus.delayTime;
  chorus.depth = state.chorus.depth;
  chorus.frequency.value = state.chorus.frequency;
  chorus.wet.value = 100;

  overdrive.distortion = state.overdrive.distortion;
  overdrive.wet.value = 50;

  delay.delayTime.value = state.delay.delayTime;
  delay.feedback.value = state.delay.feedback;
  delay.wet.value = state.delay.wet;

  reverb.wet.value = state.reverb.wet;
  reverb.roomSize.value = state.reverb.roomSize;

  wah.baseFrequency = state.wah.baseFrequency;
  wah.octaves = state.wah.octaves;
  wah.wet.value = 100;

  if (!state.chorus.active) chorus.wet.value = 0;
  if (!state.overdrive.active) overdrive.wet.value = 0;
  if (!state.delay.active) delay.wet.value = 0;
  if (!state.reverb.active) reverb.wet.value = 0;
  if (!state.wah.active) wah.wet.value = 0;

  //start making some noise
  if (state.isPlaying) {
    if (!alreadyPlaying) {
      player.start();
      alreadyPlaying = true;
    }
  } else {
    if (!alreadyPlaying) {
      player.stop();
    } else {
      player.stop();
      alreadyPlaying = false;
    }
  }
};
