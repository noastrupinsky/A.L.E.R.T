

let imageSrcs = ["img/setup.jpg",
                 "img/early_school.jpeg",
                 "img/conference.jpeg",
                 "img/overview.jpeg",
                 "img/cutting.jpeg",
                 "img/recieving_award.jpeg",
                 "img/drill.jpeg",
                 "img/awards.jpg",
                 "img/school.jpg",
                 "img/3dstairs.jpg",
                 "img/clicky.jpeg",
                 "img/measuring.jpeg",
                 "img/sitting.jpeg",
                 "img/talking_to_judge.jpeg",
                 "img/working.jpeg",
                 "img/trifold.jpg"];



let button_forward = document.getElementById("slide");
let button_backwards = document.getElementById("slide_back")
let imageHolder = document.getElementById("pic");
var index = 0;

 button_forward.onclick = function(ev){

    index++;

    if (index > imageSrcs.length - 1) {
      index = 0;
    };

    imageHolder.src = imageSrcs[index];

  };

  button_backwards.onclick = function(ev){

     index--;

     if (index < 0) {
       index = imageSrcs.length - 1;
     };
     imageHolder.src = imageSrcs[index];

   };
