// import { useRef } from "react";
import Tone from "tone";
import mp3 from "../Content/feelings.mp3";

// export const player = new Tone.Player(mp3);
const mic = new Tone.UserMedia();
const chorus = new Tone.Chorus(1.5, 4.5, 0.7);
const reverb = new Tone.Freeverb(0.8);
const delay = new Tone.PingPongDelay(0.25, 0.5);
const wah = new Tone.AutoWah(100, 6, 0);

// export const playerRef = useRef(player);
// export const micRef = useRef(mic);
// export const chorusRef = useRef(chorus);
// export const reverbRef = useRef(reverb);
// export const delayRef = useRef(delay);
// export const wahRef = useRef(wah);
//what do the functinos need to do?
//selectedPlayer.chain(all of the active pedals, Tone.master)

//useEffect
//useRef
