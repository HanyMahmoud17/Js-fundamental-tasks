var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var i = 0;
var slide;

function showImage(index) {
  var img = document.getElementById("img");
  img.src = images[index];
  i = index;
}

function next() {
  i++;
  showImage(i);
  stop();
}

function previous() {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  showImage(i);
  stop();
}

function slideshow() {
    slide = setInterval(function(){
        
        showImage(i);
        i++;
        if(i==images.length){
            i=0
        }
    },500);
  
}

function stop() {
  clearInterval(slide);
}


