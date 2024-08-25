class Transition {
  constructor(superFrame) {
    this.frame = document.getElementById(superFrame);
    this.tra = document.getElementById("transition");
    this.styling = this.tra.style;

    // timer
    this.t1 = 1000;
    this.t2 = 2000;
    this.t3 = 3000;
    this.t4 = 4000;
  }

  isType(type) {
    switch (type) {
      case "open-full":
    }
  }

  fondation() {
    this.styling.display = "block";
    this.styling.width = "100%";
    this.styling.height = "100vh";
    this.styling.borderRadius = "0";
  }

  text() {
    this.styling.display = "flex";
    this.styling.justifyContent = "center";
    this.styling.alignItems = "center";

    const waiting = document.createElement("div");
    waiting.className = "fs-2 fade-in";
    waiting.innerHTML = "waiting";
    this.tra.appendChild(waiting);
  }

  openFull() {
    fondation();
    setTimeout(() => {
      this.frame.remove();
      this.text;
    }, this.t4);
  }
}

export default Transition;
