import select from "../assets/sfx/select.mp3";

const sfx = {
  select: new Audio(select),
};

function playSfx(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

export { sfx, playSfx };
