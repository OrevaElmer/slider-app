const foodSlides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")

foodSlides.forEach((foodSlide, index)=>{
    foodSlide.style.left = `${index * 100}%`
    
})

let counter = 0
const carousel = ()=>{
    //working with slides:
    if(counter===foodSlides.length){
        counter = 0
    }
    if(counter < 0){
        counter = foodSlides.length - 1
    }
    if(counter < foodSlides.length-1){
        nextBtn.style.display = "block"
    }else{
        nextBtn.style.display = "none"
    }
    if(counter > 0){
        prevBtn.style.display = "block"
    }
    if(counter === 0){
        prevBtn.style.display = "none"
    }
    foodSlides.forEach((foodSlide)=>{
        foodSlide.style.transform = `translateX(-${counter * 100}%)`
    })
}

nextBtn.addEventListener("click", ()=>{
    counter++
    carousel()    
})

prevBtn.addEventListener("click", ()=>{
    counter--
    carousel()
})
prevBtn.style.display = "none"