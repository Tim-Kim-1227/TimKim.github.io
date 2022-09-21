window.onload = function () {
  let buttonNum = 5;  //Number of images and the buttons below images (a.k.a imageB
  let currentImageIndex = 1;  //Default index of the image and the carousel (starts from 1 not 0)
  changeButton(buttonNum,1);  //Move Carousel to its default index

  for(let i=1;i<=buttonNum;i++){  //When imageB is cliked, move image carousel to corresponding index
    let buttonClassName = '.imageB' + i.toString();
    document.querySelector(buttonClassName).addEventListener('click', function(){
      moveImageCarousel(i, buttonNum);
    });
  }

  document.querySelector('.imageBL').addEventListener('click', function(){  //When left arrow is clicked, move to previous image slide
    currentImageIndex--;
    if(currentImageIndex == 0)  //Move to the last slide when left button is clicked at the first image
      currentImageIndex = buttonNum;
    moveImageCarousel(currentImageIndex, buttonNum);  //Move carousel
  });

  document.querySelector('.imageBR').addEventListener('click', function(){  //When right arrow is clicked, move to next image slide
    currentImageIndex++;
    if(currentImageIndex == buttonNum+1)  //Move to the first slide when right button is clicked at the last image
      currentImageIndex = 1;
    moveImageCarousel(currentImageIndex, buttonNum);  //Move carousel
  });
}

function moveImageCarousel(buttonIndexNum, buttonNum){  //Move Image Carousel to a given index
  let translateVal = -100*(buttonIndexNum-1);
  let translateCommand = 'translate(' + translateVal.toString() + 'vw)';
  document.querySelector('.imageCarousel').style.transform = translateCommand;
  changeButton(buttonNum, buttonIndexNum);
}

function changeButton(buttonNum, buttonIndexNum){ //Change color and size of the imageB depending on the current index
  for(let i=1;i<=buttonNum;i++){  //reset size and color of all imageBs
    let buttonClassName = '.imageB' + i.toString();
    document.querySelector(buttonClassName).style.height = '10px';
    document.querySelector(buttonClassName).style.width = '10px';
    document.querySelector(buttonClassName).style.backgroundColor = 'white';
  }
  let buttonClassName = '.imageB' + buttonIndexNum.toString();  //Change color and make imageB's size greater at a given index
  document.querySelector(buttonClassName).style.height = '15px';
  document.querySelector(buttonClassName).style.width = '15px';
  document.querySelector(buttonClassName).style.backgroundColor = '#25316D';
}
