// Controls the header color
window.onscroll = function() {
  if (window.scrollY >= window.innerHeight - 1) {
    document.getElementById("header").style.backgroundColor = "black"
    /*document.getElementById("introduction-button").style.color = "white"
    document.getElementById("treatments-button").style.color = "white"
  document.getElementById("contact-button").style.color = "white"*/} 

    else {
    document.getElementById("header").style.backgroundColor = "transparent"
    /*document.getElementById("introduction-button").style.color = "black"
    document.getElementById("treatments-button").style.color = "black"
    document.getElementById("contact-button").style.color = "black"*/}};
