const koperta = document.getElementById("koperta-container");
const list = document.getElementById("list-container");
const title = document.getElementById("list-title");
const nieButton = document.getElementById("Nie");
const takButton = document.getElementById("Tak");
const komunikat = document.getElementById("komunikat");
const fokaIMG = document.getElementById("Foka");

koperta.addEventListener("click", () => {
  koperta.style.display = "none";
  list.style.display =  "flex";
  setTimeout(() => {
    document.querySelector(".list-window").classList.add("open");}, 500);
});

let licznik = 0;

nieButton.disabled = true;
nieButton.addEventListener("mouseover", () => {
  licznik++;

  if (licznik >= 5) {
    nieButton.style.display = "none";
   const nowyTak = takButton.cloneNode(true);
  nowyTak.id = "Tak2"; 

  document.getElementById("buttons").appendChild(nowyTak);

  return;
}

  const container = document.getElementById("hehe");
  const button = document.getElementById("Nie");

  const wrapperWidth = container.clientWidth;
  const wrapperHeight = container.clientHeight;

  const itemWidth = button.offsetWidth;
  const itemHeight = button.offsetHeight;

  const maxX = wrapperWidth - itemWidth;
  const maxY = wrapperHeight - itemHeight;
  const offset = 10;

  let randomX = Math.floor(Math.random() * maxX)
  let randomY = Math.floor(Math.random() * maxY)

  if (maxX - randomX < itemWidth) {
    randomX =  Math.floor(maxX - itemWidth - offset)
  }

    if (maxY - randomY < itemHeight) {
    randomY =  Math.floor(maxY - itemHeight - offset)
  }

  button.style.position = "absolute";
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
});

document.getElementById("buttons").addEventListener("click", (e) => {
  if (e.target.classList.contains("przycimsk")) {
    e.target.style.display = "none";
  title.textContent = "Yipieee!◝(ᵔᗜᵔ)◜ Kocham Cię! ❤️";
  fokaIMG.src = "foka.gif";}

    const wszystkieTak = document.querySelectorAll(".przycimsk");
  wszystkieTak.forEach(btn => btn.style.display = "none");


 for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.classList.add("serduszko");
    heart.innerText = "❤️";


    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

      heart.style.animationDelay = (Math.random() * 2) + "s";

    document.body.appendChild(heart);

    // usuwanie z DOM po 3s
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
});

