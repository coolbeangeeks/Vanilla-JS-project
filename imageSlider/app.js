const slidesImages=document.querySelectorAll(".slide");
// console.log(slidesImages)
var count=0;
const nextButton=document.getElementById("next");
const prevButton=document.getElementById("prev");
if(count===0){
    prevButton.disabled=true;
}
slidesImages.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`;
    }
)
const goPrev=()=>{
    if(count!=0){
        count--;
        slideMain();
        nextButton.disabled=false
        
    }
   
    

}
const goNext=()=>{
    if(count<slidesImages.length-1){
        count++;
        slideMain();
        prevButton.disabled=false;
    }
    
}
const slideMain=()=>{
    slidesImages.forEach((slide)=>{
        slide.style.transform=`translateX(-${count*100}%)`;

    })
    if(count===3){
        nextButton.disabled=true;
        nextButton.classList.add('disabled');
        
    }
    else if(count===0){
        prevButton.disabled=true;
        prevButton.classList.add('disabled');

    }
    
}