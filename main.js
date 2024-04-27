let inputEl = document.getElementById('input-el')
let btnEl = document.getElementById('btn')
let arr = []
let contEl = document.getElementById('cont-el')
let containerEl = document.getElementById('container-el')


btnEl.addEventListener('click', () => {

    let userVal = inputEl.value 
    
    if (userVal.length < 2) {
        arr.push(userVal)
        console.log(arr)
        
        

        const arrcon = arr.map((item) => item.toUpperCase())
               
        arrcon.forEach((char) => {
            contEl.innerText = char
            contEl.style.fontSize="40px"
            if (char === "A") {
                containerEl.innerText = `${char} for Apple 🍎`


            } else if (char === "B") {
                containerEl.innerText = `${char} for ball ⚽`

            }else if(char === "C"){
                containerEl.innerText = `${char} for Cat 😺`
                containerEl.style.fontSize="40px"
            }
        })


    } else {
        console.log("please enter another value");
    }


})




