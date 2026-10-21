const screens = [...document.querySelectorAll(".screen")];

function showScreen(id) {
  screens.forEach(screen => {
    const active = screen.id === id;
    screen.classList.toggle("active", active);
    screen.setAttribute("aria-hidden", String(!active));
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.go));
});

document.getElementById("yesBtn").addEventListener("click", () => {
  showScreen("yes");
  burstHearts(26);
});

document.getElementById("noBtn").addEventListener("click", () => showScreen("no"));

const heartField = document.getElementById("hearts");
function burstHearts(amount = 8) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartField.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}
setInterval(() => burstHearts(2), 1800);
showScreen("welcome");
