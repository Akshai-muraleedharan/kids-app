let inputEl = document.getElementById('input-el')
let btnEl = document.getElementById('btn')
let arr = []
let contEl = document.getElementById('cont-el')
let containerEl = document.getElementById('container-el')
let span =document.getElementById('span')


btnEl.addEventListener('click', () => {

 let  userVal = inputEl.value 
    
    if (userVal.length < 2) {
        arr.push(userVal)
        console.log(arr)

        userUpdate()


    } else {
        console.log("please enter another value");
    }
})


 function userUpdate() {
    const arrcon = arr.map((item) => item.toUpperCase())
               
        arrcon.forEach((char) => {
            contEl.innerText = char
            if (char === "A" ) {
                containerEl.innerHTML = `Apple `
                span.innerText = "🍎"
                span.className="animation-first"
                let audio = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z (A).mp3") 
                audio.play();
                
            } else if (char === "B") {
                containerEl.innerText = ` Ball `
                span.innerText = "⚽"
                span.className="animation-first"
            }else if(char === "C"){
                containerEl.innerText = ` Cat `
                span.innerText = "😺"
                span.className="animation-first"
            }
        })
 }

 
