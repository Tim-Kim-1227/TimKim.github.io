window.onload = function () {
  let buttonNum = 5;  //Number of small buttons / images
  let currentImageIndex = 1;  //Default index of image (starts from 1)
  changeButton(buttonNum,1);  //Move image carousel to its default position (index 1)

  for(let i=1;i<=buttonNum;i++){
    let buttonClassName = '.imageB' + i.toString(); //Generates Class name
    document.querySelector(buttonClassName).addEventListener('click', function(){
      moveImageCarousel(i, buttonNum);  //Move image carousel to an index that is equal to the index of the small button that was clicked
    });
  }

  document.querySelector('.imageBL').addEventListener('click', function(){
    currentImageIndex--;  //Decrease index number by 1 when the left button is clicked
    if(currentImageIndex == 0)  //If left button is clicked at first image, move to the last image in the carousel
      currentImageIndex = buttonNum;
    moveImageCarousel(currentImageIndex, buttonNum);  //Move to image of previous index
  });

  document.querySelector('.imageBR').addEventListener('click', function(){
    currentImageIndex++;  //Increase index number by 1 when the right buttion is clicked
    if(currentImageIndex == buttonNum+1)  //If right button is clicked at last iamge, move to the first image in the carousel
      currentImageIndex = 1;
    moveImageCarousel(currentImageIndex, buttonNum);  //Move to image of following index
  });
}

function moveImageCarousel(buttonIndexNum, buttonNum){  //Move image carousel to a given index
  let translateVal = -100*(buttonIndexNum-1); //We move carousel via translation.
  let translateCommand = 'translate(' + translateVal.toString() + 'vw)';
  document.querySelector('.imageCarousel').style.transform = translateCommand;  //Move carousel
  changeButton(buttonNum, buttonIndexNum);  //Change button state
}

function changeButton(buttonNum, buttonIndexNum){ //Change size of the small button that corresponds to the current index of the image showing
  for(let i=1;i<=buttonNum;i++){  //Reset sizes of all small buttons to 10*10px circle + reset color ot white
    let buttonClassName = '.imageB' + i.toString();
    document.querySelector(buttonClassName).style.height = '10px';  //Change size
    document.querySelector(buttonClassName).style.width = '10px';
    document.querySelector(buttonClassName).style.backgroundColor = 'white';  //Reset Color
  }
  let buttonClassName = '.imageB' + buttonIndexNum.toString();  //Change the size of a given small button to 15*15 circle + change color of a small button corresponding to the given index
  document.querySelector(buttonClassName).style.height = '15px';  //Change size
  document.querySelector(buttonClassName).style.width = '15px';
  document.querySelector(buttonClassName).style.backgroundColor = '#25316D';  //Change color (Blue-ish color)
}
