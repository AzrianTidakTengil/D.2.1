function Start() {
  const tra = document.getElementById("transition");
  tra.style.display = "block";
  tra.style.animation = "transition 4s ease-in";
  setTimeout(()=>{
    tra.style.width="100%"
    tra.style.height="100vh"
    tra.style.borderRadius = "0"
  }, 4000)
}
