function playSound() {
  const audio = document.getElementById("dingSound");
  audio.play().catch((error) => {
    console.error("Audio playback failed:", error);
  });
}