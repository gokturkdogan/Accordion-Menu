
var acc = document.getElementsByClassName("menu__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("-active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc1 = document.getElementsByClassName("fa-solid");
var i;

for (i = 0; i < acc.length; i++) {
  acc1[i].addEventListener("click", function() {
    this.classList.toggle("-active");
  });
}


