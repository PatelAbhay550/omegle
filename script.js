const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const snapSoundElement = document.getElementById("snapSound");
const stopButton = document.getElementById("stop");
const stopButtond = document.getElementById("stopdes");

const webcam = new Webcam(
  webcamElement,
  "user",
  canvasElement,
  snapSoundElement
);
webcam
  .start()
  .then((result) => {
    console.log("webcam started");
  })
  .catch((err) => {
    console.log(err);
  });
let isPlaying = true; // Track the current state (playing or stopped)

function togglePlayStop() {
  if (isPlaying) {
    webcam.stop();
    stopButton.textContent = "Play";
    stopButtond.textContent = "Play";
  } else {
    webcam.start();
    stopButton.textContent = "Stop";
    stopButtond.textContent = "Stop";
  }
  isPlaying = !isPlaying; // Toggle the state
}

// Add event listener to the stop button
stopButton.addEventListener("click", togglePlayStop);
stopButtond.addEventListener("click", togglePlayStop);
