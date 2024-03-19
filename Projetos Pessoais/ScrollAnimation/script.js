//right to left
let InRightLeft = "animateInRightLeft"
let OutRightLeft = "animateOutRightLeft"
//left to right
let InLeftRight = "animateInLeftRight"
let OutLeftRight = "animateOutLeftRight"

//animação Left to Right
const animeScroll = (element, element1) => {
    let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4.5)
    if(element.classList.contains("LeftRight")){
        if((windowTop >= element1.offsetTop)){
            element.classList.add(InLeftRight)
            setTimeout(()=>element1.innerHTML="Diego Henrique Xavier", 903)
            setTimeout(()=>element.classList.add(OutLeftRight), 905)
        }
        if(window.pageYOffset<element1.offsetTop - ((window.innerHeight))){
            element.classList.remove(InLeftRight)
            setTimeout(()=>element1.innerHTML="", 903)
            setTimeout(()=>element.classList.remove(OutLeftRight), 905)
        }
    }
    if(element.classList.contains("RightLeft")){
        if((windowTop >= element1.offsetTop)){
            element.classList.add(InRightLeft)
            setTimeout(()=>element1.innerHTML="Diego Henrique Xavier", 903)
            setTimeout(()=>element.classList.add(OutRightLeft), 905)
        }
        if(window.pageYOffset<element1.offsetTop - ((window.innerHeight))){
            element.classList.remove(InRightLeft)
            setTimeout(()=>element1.innerHTML="", 903)
            setTimeout(()=>element.classList.remove(OutRightLeft), 905)
        }
    }

}

window.addEventListener('scroll', () => {
    animeScroll(document.getElementById("text"), document.getElementById("textAnimation"))
    animeScroll(document.getElementById("text1"), document.getElementById("textAnimation1"))
})
