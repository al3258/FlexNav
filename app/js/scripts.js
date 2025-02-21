var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

function makeActive(currentHash) {
  makeInactive();
  document.querySelector(`a[href="#${currentHash}"]`).classList.add("active");
}

function makeInactive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

function setContentAccordingToHash() {
  const currentHash = window.location.hash.substring(1);
  contentPara.innerHTML = data[currentHash];
  makeActive(currentHash)
}

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = "cuisines";
    document.querySelector("nav a").classList.add("active");
  } else {
    document
      .querySelector(`[href="${window.location.hash}"]`)
      .classList.add("active");
  }
  setContentAccordingToHash();
}

window.addEventListener("hashchange", setContentAccordingToHash);

initializePage();
