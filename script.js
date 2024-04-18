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
  myOutput.innerHTML += rooms[0][0].description;

  if(myInput.value == 'h'){
    myOutput.innerHTML += help;
  }

}
