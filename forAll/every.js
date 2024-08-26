const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}


requestAnimationFrame(raf)
console.log("megha")

let cursor = document.querySelector('.cursor')
container.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  gsap.to(cursor, {
    x: x,
    y: y,
    duration: 1,
    ease: 'power3.out'
  })
})
let page1 = document.querySelector(".page1")
let menuBtn = document.querySelector('.asd .menuBtn')
let backToTopBtn = document.querySelector('.btt')
let navItemOpen = false;
let navHideTl = gsap.timeline({
  scrollTrigger: {
    trigger: page1,
    start: "8% 0%",
    end: "15% 12%",
    markers: false,
    scrub: 1,
  }
})
navHideTl.to('nav>ul', {
  y: -100,
}, 'ekSath')
navHideTl.to('.asd>ul', {
  transform: "translateX(-80%)"
}, 'ekSath')
navHideTl.to('.asd .menuBtn', {
  opacity: 1,
  scale: 1,
}, 'ekSath')

navHideTl.to('.smMenu', {
  y: -100,
  x:-50,
  display:"none"
}, 'ekSath')

const menuKaam = () => {
let liTag = document.querySelectorAll(".navItems ul li")
  console.log(liTag)
  let menuTl = gsap.timeline()
liTag.forEach(li =>{
  menuTl.to(li, {
    translateX:"0%",
    opacity:1,
    // color:"red",
    stagger:0.2,
    duration:0.3,
  })
})

}
const menuKaamKhtm = () => {
let liTag = document.querySelectorAll(".navItems ul li")
  console.log(liTag)
  let menuTl = gsap.timeline()
liTag.forEach(li =>{
  menuTl.set(li, {
    translateX:"-100%",
    opacity:0,
    // color:"red",
    stagger:0.2,
    duration:0.3,
  })
})

}
function navBahar(){
  if (!navItemOpen) {
    navItemOpen = !navItemOpen
    menuBtn.innerText = "close"
    menu_2Btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    gsap.to('.navItems', {
      top: '0',
      duration: 0.3,
      onload: () => { menuKaam() }
      // bottom:0,
    })
  } else if (navItemOpen) {
    navItemOpen = !navItemOpen
    menuBtn.innerText = "menu"
    menu_2Btn.innerHTML = ` <ul class="flex flex-col gap-[2px]">

          <li class="w-[10px]"></li>
          <li class="w-[8px]"></li>
          <li class="w-[6px]"></li>
          </ul>`
    gsap.to('.navItems', {
      top: '-100vh',
      duration: 0.3,
      onload: ()=>{menuKaamKhtm()}
    })

  }
}
menuBtn.addEventListener('click', () => {
 navBahar()

})

let menu_2Btn = document.querySelector(".smMenu")
menu_2Btn.addEventListener("click", ()=>{

  navBahar()
})





let footerEmailBtn = document.querySelector(".emailFootBtn")
function openGmailCompose(email) {
  const mailtoLink = `mailto:${email}?subject=`;
  window.location.href = mailtoLink;
}

    footerEmailBtn.onclick = () => openGmailCompose('premcodeprojects2810@gmail.com');


backToTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}