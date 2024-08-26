let jDiv = document.querySelector(".jDiv");
let footer = document.querySelector("footer")
let joinBtn = document.querySelector(".joinBtn");

-
jDiv.addEventListener("mousemove", (e) => {
  let btnData = joinBtn.getBoundingClientRect()
  let x = e.clientX - btnData.left - btnData.width/2;
  let y = e.clientY - btnData.top - btnData.height /2;
  joinBtn.style.transform = `translateX(${x * 0.3}px) translateY(${y * 0.3}px)`
}
)

jDiv.addEventListener("mouseleave", (e) => {
  joinBtn.style.transform = `translateX(0px) translateY(0px)`

}
)
joinBtn.onclick = () =>{
  let a = document.createElement("a")
  a.href =  `https://www.instagram.com/_megh_visuals_?igsh=MTgwbHg5bnJ2aWh1Yw==`
  a.target = `_blank`
  a.click()
}

let fCur = document.querySelector(".footCursor")
footer.addEventListener("mouseenter" , ()=>{
  fCur.classList.add("footSc")
})
footer.addEventListener("mouseleave" , ()=>{
  fCur.classList.remove("footSc")
})
document.querySelector("footer").addEventListener("mousemove" , (e) =>{
  let footPos = footer.getBoundingClientRect()
  
  let y = e.clientY - footPos.top - fCur.offsetHeight/2;
  console.log(y)
let x = e.clientX - fCur.offsetWidth/2;
  fCur.style.top = `${y}px`
  fCur.style.left = `${x}px`
})