let myOutput = document.getElementById("myOutput");
let myInput = document.getElementById("myInput");
let activeRow = 0;
let activeCol = 0;

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
 

  if(myInput.value == 'h'){
    myOutput.innerHTML += help;
  }if(myInput.value == 'g s'){
    activeRow += 1;
  }if(myInput.value == 'g n'){
    activeRow -= 1;
  }if(myInput.value == 'g e'){
    activeCol += 1;
  }if(myInput.value == 'g w'){
    activeCol -= 1;
  }

   myOutput.innerHTML += rooms[activeRow][activeCol].description + "<br>";
  
}
