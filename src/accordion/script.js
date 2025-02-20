var acc = document.getElementsByClassName("Accordion"); //creating variable to get element by class name
var i; //creating variable i
// console.log(acc);

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active"); //this toggles the class to active class

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
