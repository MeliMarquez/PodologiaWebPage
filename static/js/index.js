window.onscroll = function() {
  if (window.scrollY >= window.innerHeight) {
    document.getElementById("header").style.backgroundColor = "black"
  } else {
    document.getElementById("header").style.backgroundColor = "transparent"
  }
};
