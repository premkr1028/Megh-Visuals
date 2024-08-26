let text = document.querySelector(".hcweText")

let textString = "How can we help?"
for (let i = 0; i < textString.length; i++) {
  if (i === 0) text.innerHTML = ""

  text.innerHTML += `<span class="letters">${textString[i]}</span>`
}
console.log(text)

let textTl = gsap.timeline()

textTl.to(".letters", {
  top: "0",
  stagger: 0.025,
})


//// start to Email
let fSec = document.querySelector(".fCon")
let lastSection = document.querySelector(".lastSection")
let em = document.querySelector(".em")
let start = document.getElementById("startAPBtn")
let backToStartBtn = document.querySelector(".backToStart")
const handleStartAProject = () => {
  fSec.style.display = "none"
  em.style.display = "flex"
  // text2.innerHTML = ""
  playSec2()
}
start.addEventListener("click", handleStartAProject)
const back_to_start = () => {
  fSec.style.display = "flex"
  em.style.display = "none"
}

backToStartBtn.addEventListener("click", back_to_start)

let text2 = document.querySelector(".em h1")
// console.log(text2) 

///

const playSec2 = () => {
  let text2String = "Let's start with your Email!"
  text2.innerHTML = ""
  for (let i = 0; i < text2String.length; i++) {

    text2.innerHTML += `
    <span class="letSec">${text2String[i]}</span>
    `

  }
  console.log(text2)
  let letSec = document.querySelectorAll(".letSec")
  letSec.forEach(letter => {
    letter.style.position = "relative"
    letter.style.top = "100%"
  }
  )

  let text2Tl = gsap.timeline()
  text2Tl.to(letSec, {
    transform: "translateY(0)",
    stagger: 0.020,
  })
}
let secSecBtn = document.querySelector(".secSecBtn")
function goNext(e) {
  e.preventDefault()
  let ema = getEmail.value
 getEmail.value = ema
  goToFrom(ema)
}
secSecBtn.addEventListener("click", goNext)

///
let thriText = document.querySelector("#thirdText")

function formAni(){

  let text3 = document.querySelectorAll(".pText")

  text3.forEach(texts => {

    let textStr = texts.innerText;
    texts.innerHTML = ""
    for (let i = 0; i < textStr.length; i++) {
      texts.innerHTML += `<span class="lets">${textStr[i]}</span>`
    }
    console.log(texts)
  })
let tl4 = gsap.timeline()
  tl4.to(".lets", {
    top: 0,
    stagger: 0.025,
  })
}

////
// let getEmailBtn = document.querySelector(".secSecBtn")
let getEmail = document.getElementById("emaill")
let lastEmail = document.getElementById("lastEmail")
function goToFrom(email) {
  if(getEmail.value = "" || getEmail.value.indexOf("@") == -1 || getEmail.value.indexOf(".") == -1){
    return
  }
  em.style.display = "none"
  
  lastEmail.value = email
  getEmail.value = email
  lastSection.style.display = "flex"
  formAni()
}
// getEmailBtn.addEventListener("click",goToFrom)

let backEm = document.querySelector(".backEm")
backEm.addEventListener("click" , ()=>{
  lastSection.style.display = "none"
  em.style.display = "flex"
  thriText.innerHTML = `<h1 class="pText text-[6vmax]">Tell us about</h1>
          <h1 class="pText text-[6vmax]">your project!</h1>`
})
let goToEmailBtn = document.querySelector(".emailBtn")
function openGmailCompose(email) {
  const mailtoLink = `mailto:${email}?subject=`;
  window.location.href = mailtoLink;
}

  goToEmailBtn.onclick = () => openGmailCompose('premcodeprojects2810@gmail.com');
