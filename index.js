const botoes = document.querySelectorAll(".drum");

botoes.forEach((botao) =>
  botao.addEventListener("click", function () {
    playSound(this.innerHTML);
    applyEffect(this.innerHTML);
  })
);

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  applyEffect(event.key);
});

function playSound(input) {
  switch (input) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(input);
  }
}

function applyEffect(input) {
  var activeButton = document.querySelector("." + input);
  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
