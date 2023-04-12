var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


const myImage = document.getElementById('pfp');
myImage.addEventListener('click', () => {
  window.location.href = 'https://creatorofbiontium.github.io/PotatoeCloud/login';});