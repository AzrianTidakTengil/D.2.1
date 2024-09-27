var modal = false;
let defaultVolum = 0.2;
var newChange = 0;
var isChange = false;

const bgmControll = document.getElementById("bgm");
var volumRange = document.getElementById("range");

bgmControll.volume = defaultVolum;

function showModal(status) {
  if (status == "open") {
    modal = true;
  } else if (status == "reset") {
    isChange = false;
    newChange = 0;
    bgmControll.volume = defaultVolum;
    volumRange.value = defaultVolum;
  }
}

function saveChanges() {
  bgmControll.volume = volumRange.value;
  newChange = volumRange.value;
  isChange = true;
}

function slideChange() {
  bgmControll.volume = volumRange.value;
}
