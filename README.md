## Update
Since deploying this project I have learned that, while the audio always works on my own machine, it does not always work on other machines.  Hopefully I'll push an update with a fix for that sometime soon but it has proven challening to debug as I'm unsure how to reproduce it.

## React FX
React FX implements realtime audio processing to emulate electric guitar effects pedal.  It comes preloaded with an mp3 so that anyone can try it and also allows for a user to connect a guitar with an audio interface and use that signal.

## Tech
React FX exclusively uses function components and hooks along with a custom data layer to allow for a redux like management of state.  Styled components is used to allow for the writing of CSS in Javascript.  Tone.js provides access to the web audio API.


## How To Use It
If you would like to try it simply open the page, select either  mp3 or mic (technically this is your default system input, and hit play.  Each effect has a button near the button to toggle it on and off along with at least one parameter that will change the way it alters the sound.

Check it out here!
https://thirsty-ride-5066a2.netlify.com/
