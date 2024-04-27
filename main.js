let inputEl = document.getElementById('input-el')
let btnEl = document.getElementById('btn')
let arr = []
let contEl = document.getElementById('cont-el')
let containerEl = document.getElementById('container-el')
let span =document.getElementById('span')
let  userVal;

btnEl.addEventListener('click', () => {
    
  userVal = inputEl.value 
    
 
   
  if(userVal.length < 2){
     contEl.innerText = userVal.toUpperCase()
     condition()
     
   

}else{
    console.log('please enter another val');
}
  



})
let  aAudio

   function condition() {

    if(userVal === "a" || userVal === "A"  ){

        containerEl.innerHTML = `Apple `
        span.innerText = "🍎"
        span.className="animation-first"
         aAudio = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z (A).mp3") 
        aAudio.loop = false
        aAudio.play();
        
       
       
    }else if(userVal === "b" || userVal === "B"){
        containerEl.innerText = ` Ball `
      span.innerText = "⚽"
        span.className="animation-first"
        let bAudio = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(B) .mp3") 
         bAudio.play();
         
    }else if(userVal === "c" || userVal === "C"){
        containerEl.innerText = ` Cat `
      span.innerText = "😺"
        span.className="animation-first"
        aAudio= new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(B) .mp3") 
        aAudio.play();
        

         }
    }    

    

    
        
    

  
    