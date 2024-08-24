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
    const waitingGift = document.createElement("div", {id: 'transition-gift'})
    tra.appendChild(waitingGift);
    tra.appendChild(waiting.appendChild(document.createTextNode("waiting")));
  }, 4000);
}
