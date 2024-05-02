function resolveLook() {
  if (myInput.value == 'l bicycle') {
    if (rooms[activeRow][activeCol].name == "roomOne") {
      myOutput.innerHTML += `<br> You notice a nice looking bicycle in the corner of the room. 
      You pick it up and put it in your backpack.`;
       myOutput.scrollTop = myOutput.scrollHeight;
      myItems.push("bicycle");
      console.log("you now have a bicycle")
    } else {
      myOutput.innerHTML += `<br> Looks like you are too
      far away from the bicycle.`;
       myOutput.scrollTop = myOutput.scrollHeight;
    }//end else
  }//end item Bicycle
}
