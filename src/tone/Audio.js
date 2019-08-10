// import { useRef } from "react";
import Tone from "tone";
import mp3 from "../Content/feelings.mp3";

const player = new Tone.Player(mp3);
const chorus = new Tone.Chorus(1.5, 4.5, 0.7);
const reverb = new Tone.Freeverb(0.8);
const delay = new Tone.PingPongDelay(0.25, 0.5);
const wah = new Tone.AutoWah(100, 6, 0);
const overdrive = new Tone.Distortion(0.4);

player.chain(overdrive, chorus, reverb, delay, wah, Tone.Master);

const mic = new Tone.UserMedia();
const chorusMic = new Tone.Chorus(1.5, 4.5, 0.7);
const reverbMic = new Tone.Freeverb(0.8);
const delayMic = new Tone.PingPongDelay(0.25, 0.5);
const wahMic = new Tone.AutoWah(100, 6, 0);
const overdriveMic = new Tone.Distortion(0.4);
mic.chain(overdriveMic, chorusMic, reverbMic, delayMic, wahMic, Tone.Master);

let activeSource;
let alreadyPlaying = false;
export const handleStateChange = state => {
  if (state.audioSource === null) {
    activeSource = player;
  }
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

  chorusMic.delayTime = state.chorus.delayTime;
  chorusMic.depth = state.chorus.depth;
  chorusMic.frequency.value = state.chorus.frequency;
  chorusMic.wet.value = 100;

  overdriveMic.distortion = state.overdrive.distortion;
  overdriveMic.wet.value = 50;

  delayMic.delayTime.value = state.delay.delayTime;
  delayMic.feedback.value = state.delay.feedback;
  delayMic.wet.value = state.delay.wet;

  reverbMic.wet.value = state.reverb.wet;
  reverb.roomSize.value = state.reverb.roomSize;

  wahMic.baseFrequency = state.wah.baseFrequency;
  wahMic.octaves = state.wah.octaves;
  wahMic.wet.value = 100;

  if (!state.chorus.active) chorus.wet.value = 0;
  if (!state.overdrive.active) overdrive.wet.value = 0;
  if (!state.delay.active) delay.wet.value = 0;
  if (!state.reverb.active) reverb.wet.value = 0;
  if (!state.wah.active) wah.wet.value = 0;

  if (!state.chorus.active) chorusMic.wet.value = 0;
  if (!state.overdrive.active) overdriveMic.wet.value = 0;
  if (!state.delay.active) delayMic.wet.value = 0;
  if (!state.reverb.active) reverbMic.wet.value = 0;
  if (!state.wah.active) wahMic.wet.value = 0;

  //start making some noise
  if (state.isPlaying) {
    console.log("state :", state);
    if (state.audioSource === "mp3") {
      mic.close();
      if (!alreadyPlaying) {
        player.start();
        alreadyPlaying = true;
      }
    } else if (state.audioSource === "mic") {
      player.stop();
      if (!alreadyPlaying) {
        mic.open();
        alreadyPlaying = true;
      }
    }
  } else {
    mic.close();
    player.stop();
    alreadyPlaying = false;
  }
};
