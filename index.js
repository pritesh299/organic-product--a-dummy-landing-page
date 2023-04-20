const slides=document.getElementsByClassName("slide")
slidesIndex=1;
currentIndex=slidesIndex;
slidesShow(slidesIndex)
function slideTo(x){ slidesShow(x); }
function slideplus(x){ slidesShow(currentIndex+x)    }
function slidesShow(n){
    
     if(n>slides.length) {n=1}
     if(n<1) {n=slides.length}
          for(let i=0;i<slides.length;i++)
          {
             slides[i].style.display="none"
            }
         slides[n-1].style.display="block";
        currentIndex=n;
         }
         
         