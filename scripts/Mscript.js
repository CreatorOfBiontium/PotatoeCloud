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

function altclose(){
  if (confirm("Tento web je ve velmi rané fázi vývoje. Zda-li souhlasíte s PRE-ALFA přístupem budete moci se podívat na web podívat (Skoro nic tu není). POZN.: Tento web se momentálně vyvyjí 'ofline' a budoucí změny nebudou publikovány do dokončení ALFY.")) {
    
  } else {
    window.close()
  }
}