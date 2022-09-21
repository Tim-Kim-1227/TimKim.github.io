window.onload = function(){
  let moveY = 0;  //Defualt translation value of the Arrow
  window.setInterval(() => {
    moveY += 2; //Rate of Change
    let translateVal = 'translateY('+moveY.toString()+'px'; //Generate String Command
    document.querySelector('.buttonImage').style.transform = translateVal;  //Move Arrow
    if(moveY >= 60){  //If Arrow moved more than 60px, reset the position.
      document.querySelector('.buttonImage').style.transform = 'translateY(-50px)';
      moveY = 0;
    }
  }, 1000 / 40);  //Time-interval (=25ms)
}
