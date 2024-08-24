function Start() {
  const f1 = document.getElementById("f1");
  const tra = document.getElementById("transition");
  tra.style.display = "block";
  tra.style.animation = "transition 4s ease-in";
  setTimeout(() => {
    tra.style.width = "100%";
    tra.style.height = "100vh";
    tra.style.borderRadius = "0";
    tra.style.display = "flex";
    tra.style.justifyContent = "center";
    tra.style.alignItems = "center";
    f1.remove();
    const waiting = document.createElement("div", { id: "waiting" });
    waiting.className = "fs-2 open-tra";
    const waitingGift = document.createElement("div", {
      id: "transition-gift",
    });
    waiting.innerHTML = "waiting";
    tra.appendChild(waitingGift);
    tra.appendChild(waiting);
  }, 4000);
}
