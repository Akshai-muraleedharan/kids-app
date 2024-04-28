  let inputEl = document.getElementById('input-el');
  let btnEl = document.getElementById('btn');
  let contEl = document.getElementById('cont-el');
  let containerEl = document.getElementById('container-el');
  let span = document.getElementById('span');
  let warnigs = document.getElementById('warns')
  // global inzlisation
  let userVal;
  let voice;


//  button function 

btnEl.addEventListener('click', () => {


  userVal = inputEl.value



  if (userVal === "") {
    console.log('please enter another val');
    fastload()
    warnigs.innerText = "Please enter a value not empty"

  } else if (userVal.length < 2) {
    contEl.innerText = userVal.toUpperCase()
    condition()
    pagereload()
  } else {
    console.log("enter val");
    warnigs.innerText = "Maximum one character"
    fastload()
  }




}, { once: true })


// condition for addeventListner()

function condition() {

  if (userVal === "a" || userVal === "A") {

    containerEl.innerHTML = `Apple `
    span.innerText = "🍎"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z (A).mp3")
    voice.loop = false
    voice.play();


  } else if (userVal === "b" || userVal === "B") {
    containerEl.innerText = ` Ball `
    span.innerText = "⚽"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(B) .mp3")
    voice.play();

  } else if (userVal === "c" || userVal === "C") {
    containerEl.innerText = ` Cat `
    span.innerText = "😺"
    span.className = "animation-first"

    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(3)(C).mp3")
    voice.play();

  } else if (userVal === "d" || userVal === "D") {
    containerEl.innerText = ` Dog `
    span.innerText = "🐕"
    span.className = "animation-first"

    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(2)(D).mp3")
    voice.play();
  } else if (userVal === "e" || userVal === "E") {
    containerEl.innerText = ` Elephant `
    span.innerText = "🐘"
    span.className = "animation-first"

    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(3)(E).mp3")
    voice.play();
  } else if (userVal === "f" || userVal === "F") {
    containerEl.innerText = ` Fish `
    span.innerText = "🐠"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(4)(F).mp3")
    voice.play();
  } else if (userVal === "g" || userVal === "G") {
    containerEl.innerText = ` Girl`
    span.innerText = "🧍‍♀️"
    span.className = "animation-first"

    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(5)(G).mp3")
    voice.play();
  } else if (userVal === "h" || userVal === "H") {
    containerEl.innerText = ` Hat`
    span.innerText = "👒"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(6)(H).mp3")
    voice.play();
  } else if (userVal === "i" || userVal === "I") {
    containerEl.innerText = ` igloo`
    span.innerText = "🍙"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(7)(I).mp3")
    voice.play();
  } else if (userVal === "j" || userVal === "J") {
    containerEl.innerText = ` Juice`
    span.innerText = "🧃"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(8)(J).mp3")
    voice.play();
  } else if (userVal === "k" || userVal === "K") {
    containerEl.innerText = ` Kangaroo`
    span.innerText = "🦘"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(9)(K).mp3")
    voice.play();
  } else if (userVal === "l" || userVal === "L") {
    containerEl.innerText = ` Lion`
    span.innerText = "🦁"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(10)(L).mp3")
    voice.play();
  } else if (userVal === "m" || userVal === "M") {
    containerEl.innerText = `Monkey `
    span.innerText = "🐒"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(11)(M).mp3")
    voice.play();
  } else if (userVal === "n" || userVal === "N") {
    containerEl.innerText = `Nose`
    span.innerText = "👃"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(12)(N).mp3")
    voice.play();
  } else if (userVal === "o" || userVal === "O") {
    containerEl.innerText = ` Octupus`
    span.innerText = "🐙"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(13)(O).mp3")
    voice.play();
  } else if (userVal === "p" || userVal === "P") {
    containerEl.innerText = `Pig`
    span.innerText = "🐖"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(14)(P).mp3")
    voice.play();
  } else if (userVal === "q" || userVal === "Q") {
    containerEl.innerText = `Queen`
    span.innerText = "👸"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(15)(Q).mp3")
    voice.play();
  } else if (userVal === "r" || userVal === "R") {
    containerEl.innerText = ` Rain`
    span.innerText = "🌧️"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(16)(R).mp3")
    voice.play();
  } else if (userVal === "s" || userVal === "S") {
    containerEl.innerText = ` Sun`
    span.innerText = "🌞"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(17)(S).mp3")
    voice.play();
  } else if (userVal === "t" || userVal === "T") {
    containerEl.innerText = ` Train`
    span.innerText = "🚂"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(18)(T).mp3")
    voice.play();
  } else if (userVal === "u" || userVal === "U") {
    containerEl.innerText = `Umberlla`
    span.innerText = "☔"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(19)(U).mp3")
    voice.play();
  } else if (userVal === "v" || userVal === "V") {
    containerEl.innerText = `van`
    span.innerText = "🚐"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(20)(V).mp3")
    voice.play();
  } else if (userVal === "w" || userVal === "W") {
    containerEl.innerText = `Watch`
    span.innerText = "⌚"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(21)(W).mp3")
    voice.play();
  } else if (userVal === "x" || userVal === "X") {
    containerEl.innerText = `Box`
    span.innerText = "📦"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(22)(X).mp3")
    voice.play();
  } else if (userVal === "y" || userVal === "Y") {
    containerEl.innerText = `Yoyo`
    span.innerText = "🪀"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(23)(Y).mp3")
    voice.play();
  } else if (userVal === "z" || userVal === "Z") {
    containerEl.innerText = `Zoo`
    span.innerText = "🦍🐒🐆"
    span.className = "animation-first"
    voice = new Audio("mp3/AudioCutter_ABC Phonics Chant for Children  _  Sounds and Actions from A to Z(24)(Z).mp3")
    voice.play();
  }

}


// This function for refresh the page
function pagereload() {
  setTimeout(() => {
    location.reload()
  }, 10000);
}

function fastload() {
  setTimeout(() => {
    location.reload()
  }, 2000)
}



//      ownproject Akshai Muraleedharan