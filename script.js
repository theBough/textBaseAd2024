let myOutput = document.getElementById("myOutput");
let myInput = document.getElementById("myInput");

let help = 
  "***********************************</br>\
   h - help</br>\
   g - go</br>\
   i - inventory</br>\
   m - map</br>\
   ************************************</br>"

myInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    startGame()
  }
});

function startGame() {
  myOutput.innerHTML += " <br>You are in the commons at West K. You see a door to the north and a door to the east. Which way do you want to go?";

  if(myInput.value == 'h'){
    myOutput.innerHTML += help;
  }

}
