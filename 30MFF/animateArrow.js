window.onload = function(){
  let moveY = 0;  //Var to control position of the arrow
  window.setInterval(() => {  //move arrow every 25ms
    moveY += 2; //Rate of px change
    let translateVal = 'translateY('+moveY.toString()+'px';
    document.querySelector('.buttonImage').style.transform = translateVal;
    if(moveY >= 60){  //Reset Position when moveY gets greater than 60
      document.querySelector('.buttonImage').style.transform = 'translateY(-50px)';
      moveY = 0;  //Reset moveY's value to 0
    }
  }, 1000 / 40);  //Time-interval
}
