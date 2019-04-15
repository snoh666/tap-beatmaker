window.addEventListener('load', () => {

  //Get sounds element
  const sounds = document.getElementsByClassName('sounds');
  //Get pads elements
  const pads = document.querySelectorAll('.pads div');
  //Get visual box
  const visual = document.getElementsByClassName('visuals')[0];
  //Set colors for all the pads to use in visual
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  //Add listener and functionality to every pad
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      //Set current time if user clicks again while it was already playing
      sounds[index].currentTime = 0;
      //Play sound
      sounds[index].play();
      //Start visual bubble function
      createBubble(index);
    });
  });

  const createBubble = index => {
  
    //Create div bubble element
    const bubble = document.createElement('div');
    //Append bubble into visual box element
    visual.appendChild(bubble);
    //Set backgound color for correct pad clicked
    bubble.style.backgroundColor = colors[index];
    //Add animation to bubble for jump
    bubble.style.animation = `jump 1s ease`;
    //Add listener for bubble after animation ends
    bubble.addEventListener('animationend', function() {
      //Remove bubble after transition ends
      //No need to use it again
      visual.removeChild(this);
    });

  };

});
