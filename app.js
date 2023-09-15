var numberOfAnimalButtons = document.querySelectorAll(".btn").length;

for (let i = 0; i < numberOfAnimalButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var buttons = this.innerText;
    switch (buttons) {
      case "cat":
        var cat = new Audio("sounds/cat.wav");
        cat.play();
        break;
      case "hello":
        alert("Greetings to you my friend.");
        break;
      case "Click Me!":
        if (this.style.color === "red") {
          this.style.color = "black";
        } else if (this.style.color === "black") {
          this.style.color = "#e7b2ff";
        } else {
          this.style.color = "red";
        }
        break;
      case "Alagazam":
        this.style.display = "none";
        var magic = new Audio("sounds/magic.mp3");
        magic.play();
        break;
      case "Odd or Even":
        let input;
        do {
          input = Number(prompt("Give me a number"));
          if (isNaN(input)) {
            alert("Invalid input. Please enter a valid number.");
          }
        } while (isNaN(input));
        if (input % 1 === 0 && input !== 0) {
          if (input % 2 === 0) {
            alert("It is an EVEN NUMBER");
          } else {
            alert("It is an ODD NUMBER");
          }
        }
        break;
      case "Hulk":
        document.querySelectorAll(".btn")[5].style.backgroundColor = "green";
        break;
    }
  });
}
