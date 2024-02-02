// javascript for scroll top button interaction
var topButton = document.getElementById("topBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

topButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




