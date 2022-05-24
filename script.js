const img = document.querySelector(".slide");

let count = 0;


function slide(){
    ++count 

    if(count == 4){
        count = 0; 
    }

    img.style.transform = `translateX(${-count * 500}px)`;
}

setInterval(slide, 4000);