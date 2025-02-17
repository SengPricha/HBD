
function createBalloon() {
  let balloon = document.createElement("div");
  balloon.classList.add("balloon");
  document.body.appendChild(balloon);
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.backgroundColor = ["red", "blue", "yellow", "green"][
    Math.floor(Math.random() * 4)
  ];
  setTimeout(() => balloon.remove(), 5000);
}

function createHeart() {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  const heartType = ["❤️", "🤍", "💗", "💖","💝", "💙", "💚", "💛"];
  heart.innerHTML = heartType[Math.floor(Math.random() * heartType.length)];
  document.body.appendChild(heart);
  heart.style.left = Math.random() * window.innerWidth + "px";
  setTimeout(() => heart.remove(), 3000);
}

function createToy() {
  let toy = document.createElement("div");
  toy.classList.add("toy");
  const toyEmojis = ["🎉", "🎁", "😘", "😍","🎀","🤩"];
  toy.innerHTML = toyEmojis[Math.floor(Math.random() * toyEmojis.length)];
  document.body.appendChild(toy);
  toy.style.left = Math.random() * window.innerWidth + "px";
  setTimeout(() => toy.remove(), 4000);
}

function changeImage() {
  let images = [
    "photo1.jpg",
    "photo7.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo8.jpg",
  ];
  let index = 0;
  document.getElementById("birthdayImage").style.display = "block";
  setInterval(() => {
    document.getElementById("birthdayImage").src = images[index];
    index = (index + 1) % images.length;
  }, 1000);
}

function typeText() {
  let text = "28-02-2025";
  let index = 0;
  let typingText = document.getElementById("typingText");

  function type() {
      typingText.innerHTML += text[index];
      index++;
      if (index < text.length) {
          setTimeout(type, 300); // Adjust typing speed
      } else {
          setTimeout(() => {
              typingText.innerHTML = ""; // Clears text and restarts
              index = 0;
              type();
          }, 1000); // Delay before restarting
      }
  }
  type();
}


setInterval(createBalloon, 500);
setInterval(createHeart, 700);
setInterval(createToy, 800);
changeImage();
typeText();