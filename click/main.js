const btn1 = document.querySelector('[data-button="btn1"]');
const btn2 = document.querySelector('[data-button="btn2"]');
const btn3 = document.querySelector('[data-button="btn3"]');
// const btn4 = document.querySelector('[data-button="btn4"]');
const buttons = Array.from(document.querySelectorAll('button'))
const pigPic = document.querySelector(".spindiv")
let pigDiv = document.createElement("div")
let addPig = pigDiv.classList.add("pigsmile")

let pigSmile = document.querySelector(".pigsmile")





btn1.addEventListener('click', clickOn)
btn1.addEventListener('click', () => {
    const oink = new Audio('./audio/oink_1.mp3')
    oink.play()
})



buttons.forEach((button) => {
    button.addEventListener('click', () => {
    button.classList.toggle('clkd')
    setTimeout(() => button.classList.remove('clkd'), 175)
})
})

    

function clickOn () {
    pigDiv.classList.add("pigsmile")
    pigPic.appendChild(pigDiv)
    btn1.addEventListener('click', pigRemove)
    btn2.addEventListener('click', pigAnimate)
    btn3.addEventListener('click', pigPulse) 
}

function pigRemove () {
    pigPic.removeChild(pigDiv)
    btn1.removeEventListener('click', pigRemove)
    btn1.addEventListener('click', clickOn)
        
    
}

function pigAnimate () {
    let spinDiv = document.querySelector(".spindiv")
    spinDiv.classList.add("animate")
    btn2.removeEventListener('click', pigAnimate)
    btn2.addEventListener('click', () => { 
        spinDiv.classList.remove("animate")
        void spinDiv.offsetWidth
        spinDiv.classList.toggle("animate")
    })
}

function pigPulse (){
    let pigDiv = document.querySelector(".pigsmile")
    pigDiv.classList.add("pulse")
    btn3.addEventListener('click', () => {
        pigDiv.classList.toggle("pulse")
    })
}








// function pigStop () {
//     let pigDiv = document.querySelector(".pigsmile")
//     pigDiv.classList.add("pause")
//     btn2.removeEventListener('click', pigStop)
//     btn2.addEventListener('click', pigAnimate)
// }




    



