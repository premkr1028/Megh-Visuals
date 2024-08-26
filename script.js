const lenis = new Lenis()

// lenis.on('scroll', (e) => {

// })
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}


requestAnimationFrame(raf)
//loadingAnimation
let container = document.getElementById("container");
let loadingOverlay = document.querySelector('.loadingOverlay')
let loaderText = document.querySelector('.overlayMidTextDiv span')

let load = gsap.timeline()
gsap.set(loaderText, {

  y: '100%'
})
load.to(loaderText, {
  opacity: 1,
  y: '0%',
  // duration:1,
  ease: 'power1.out',
  delay: 0.5
})
load.to(loadingOverlay, {
  y: '-100vh',
  // opacity:0,
  duration: 1,
  delay: 0.2,
  ease: 'power3.out',
  onComplete: () => {
    loadingOverlay.classList.add('hidden')

  }

})



let nav = document.querySelector("nav");
let body = document.querySelector('body')
let page1 = document.querySelector('.page1')
let page2 = document.querySelector('.page2')
let cursor = document.querySelector('.cursor')
let secCur = document.querySelector('.secCursor')
let svg = document.querySelector('svg');
let sayHelloDiv = document.querySelector('.say')
let path = document.querySelector('path')
let svgWidth = svg.getBoundingClientRect().width;
let svgHeight = 36 + 'vh'
let initialPath = `M 0 50 Q ${svgWidth / 2} 50 ${svgWidth} 50`
let menuBtn = document.querySelector('.asd .menuBtn')
let backToTopBtn = document.querySelector('.btt')
let navItemOpen = false;
let navHideTl = gsap.timeline({
  scrollTrigger: {
    trigger: page2,
    start: "0% 90%",
    end: "10% 70%",
    markers: false,
    scrub: 1,
  }
})
navHideTl.to('nav>ul', {
  y: -100,
}, 'ekSath')

navHideTl.to('.smMenu', {
  y: -100,
  x:-50,
  display:"none"
}, 'ekSath')
navHideTl.to('.asd>ul', {
  transform: "translateX(-80%)"
}, 'ekSath')
navHideTl.to('.asd .menuBtn', {
  opacity: 1,
  scale: 1,
}, 'ekSath')
// navHideTl.to(nav,{
//   y:-100,
//   ease:'linear'
// })
window.addEventListener('load', () => {
  path.setAttribute('d', initialPath)
})
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

svg.addEventListener('mousemove', (dets) => {
  let pp = (dets.y) - (svg.getBoundingClientRect().y)

  initialPath = `M 0 50 Q ${dets.x} ${pp} ${svgWidth} 50`
  // console.log(dets.x)
  gsap.to('svg path', {
    attr: { d: initialPath },
    duration: 0.2,
    ease: 'power3.out'

  })
})

svg.addEventListener('mouseleave', () => {
  gsap.to('svg path', {
    attr: { d: `M 0 50 Q ${svgWidth / 2} 50 ${svgWidth} 50` },
    duration: 0.5,
    ease: "ealastic.out(1,0.2)"

  })
})
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

container.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  gsap.to('.secCur', {
    x: x - 100,
    y: y - 100,
    duration: 1,
    ease: 'power3.out'
  })
})

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.page2',
    start: '0% 0%',
    end: '150% 50%',
    // markers:true,
    scrub: true,
    pin: true,

  }
})
tl.to('.abdiv', {
  scale: 0.8,
  opacity: 0.2,

  duration: 3,
  ease: 'power3.out',
})
tl.to('.abdiv', {
  scale: 0.6,
  opacity: 0.1,
  duration: 3,
  ease: 'power3.out',
}, 'a')
tl.to('.uper', {
  top: 0,
  duration: 5,
  ease: 'power3.out',
}, 'a')
let tl3 = gsap.timeline({
  scrollTrigger: {

    trigger: '.wwd',
    // start:'bottom top',
    start: '-40% -40%',
    end: '300% 30%',
    markers: false,
    scrub: true,
    pin: true,

  }
})
tl3.to('.wwd .cirCont', {
  duration: 1,
  width: '40vw',
  height: '40vw',
})
tl3.to('.wwd .cirCont', {
  duration: 3,
  width: '200vw',
  height: '200vw',
}, 'a')
tl3.to('.wwd .cirCont', {
  duration: 4,
  borderRadius: '0px',
}, 'b')
tl3.to('.wwd .cirCont p', {
  opacity: 0.7,
  fontSize: '38vw',
}, 'a')
tl3.to('.wwd .cirCont p', {
  duration: 2,
  opacity: 1,
  fontSize: '42vw',
}, 'b')
tl3.to('.wwd .cirCont p', {
  duration: 40,
  transform: 'translateX(-35%)'

})
let wwdTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.wwdDet',
    start: '30% 70%',
    end: '50 30%',
    markers: false,
    duration: 3,
    scrub: false,
  }
})
wwdTimeline.from('.veCard .card', {
  y: -30,
  opacity: 0,
  x: -50,
}, 'card')
wwdTimeline.from('.gdCard .card', {
  y: 30,
  opacity: 0,
  x: 50,
}, 'card')
wwdTimeline.from('.gdText .elev', {
  y: 10,
})
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.p3',
    start: '10% 50%',
    end: '40% 50%',
    markers: false,
    scrub: 2,


  }
})
tl2.to('.page3 .textAppearance p:nth-child(2)', {
  width: '100%',

})
tl2.to('.page3 .textAppearance2 p:nth-child(2)', {
  width: '100%',

})
tl2.to('.page3 .textAppearance3 p', {
  opacity: 1,
  scale: 1.2,
  ease: 'power3.out',
})

let examplesTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.examples',
    start: '10% 85%',
    end: '40% 25%',
    markers: false,
    scrub: true,
  }
})
examplesTl.from('.examples .showreel .vdiv', {
  y: 40,
  opacity: 0,
})

examplesTl.from('.examples .reels .r1', {
  x: -40,
  opacity: 0,
}, 'eko')
examplesTl.from('.examples .reels .r2', {
  x: 40,
  opacity: 0,
}, 'eko')

let qTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.wcu',
    start: '10% 85%',
    end: '50% 25%',
    markers: false,
    scrub: true,
    duration: 2
  }
})

qTl.from('.wcu .thinkImg', {
  x: -40,
  opacity: 0,
}, 'wc')
qTl.from('.wcu>h1', {
  y: 40,
  opacity: 0,
}, 'wc')
// qTl.from('.wcu .cardCont .card',{
//   y:40,
//   opacity:0,
// })
let text = document.querySelector('.cursorCircle #text h3')

text.innerHTML = text.innerText.split("").map((val, i) => `<span style="transform: rotate(${i * 8.6}deg)" class="letters">${val}</span>`).join("")


sayHelloDiv.addEventListener('mouseenter', () => {
  cursor.style.display = 'none';


})

sayHelloDiv.addEventListener('mouseleave', () => {
  cursor.style.display = 'flex';

})
document.querySelector('.say-hello').addEventListener('mouseenter', () => {
  gsap.to(secCur, {

    display: 'flex',
    scale: 0.3,
  })
})
document.querySelector('.say-hello').addEventListener('mouseleave', () => {
  gsap.to(secCur, {
    display: 'none',
    scale: 0,
    // opacity:0,
  })
})

gsap.from('.say-hello', {
  scrollTrigger: {
    trigger: '.say',
    start: '15% 70%',
    end: '25% 70%',
    markers: false,
    scrub: false,
    duration: 0.5
  },
  y: 40,
  opacity: 0
})
let tlFoooter = gsap.timeline({
  scrollTrigger: {
    trigger: '.say',
    start: '70% bottom',
    end: '40% top',
    markers: false,
    scrub: true
  }
})
tlFoooter.to('footer .fc1', {
  height: '80vh',
  display: 'flex',
})
gsap.to('footer .fc1', {
  scrollTrigger: {
    trigger: '.say',
    start: '70% 40%',
    end: '100% -18',
    markers: false,
    scrub: true
  },
  opacity: 1,
})



backToTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

let footerEmailBtn = document.querySelector(".emailFootBtn")
function openGmailCompose(email) {
  const mailtoLink = `mailto:${email}?subject=`;
  window.location.href = mailtoLink;
}

footerEmailBtn.onclick = () => openGmailCompose('premcodeprojects2810@gmail.com');
document.querySelector(".say-hello").addEventListener("click", () => {
  let a = document.createElement("a")
  a.href = "pages/contact/contact.html"
  a.click()
})

let menu_2Btn = document.querySelector(".smMenu")
menu_2Btn.addEventListener("click", ()=>{
  
  navBahar()
})