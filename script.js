let bar = document.querySelector(".progress-bar");
let btn = document.querySelector(".btn-download");

btn.addEventListener("click", move);

function move() {
  let width = 10;
  let myInterval = setInterval(frame, 25);

  function frame() {
    if (width >= 100) {
      clearInterval(myInterval);
      btn.innerHTML = "<button>Download Again</button>";
      bar.innerHTML = "Download Completed";
    } else {
      width += 1;
      bar.style.width = width + "%";
      bar.innerHTML = width * 1 + "%";
      btn.innerHTML = "<button>Downloading Please Wait...</button>";
    }
  }
}
