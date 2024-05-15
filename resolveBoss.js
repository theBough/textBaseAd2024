let bossHealth = 30
function resolveBoss(){
  if(rooms[activeRow][activeCol].name == 'boss'){
    if(myInput.value == 'p'){
      let punchHit = Math.floor(Math.random() * 100) + 1;
      if(punchHit < 21){
        //they are successfull
        myOutput.innerHTML += `<br> You punch the minotaur, and he takes 
        10pts damage<br>`
        bossHealth -= 10;
        myOutput.innerHTML +=`</br> The minotaur now has` + bossHealth +'health left.<br>'
        myOutput.scrollTop = myOutput.scrollHeight;
      }else{
        //they failed
        myOutput.innerHTML += `<br> You punch the minotaur, but you miss.<br>`
        myOutput.scrollTop = myOutput.scrollHeight;
      }
    }
    return true;
  }
  return false;
}//end of resolveBoss
