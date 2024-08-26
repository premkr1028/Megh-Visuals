let wrapper = document.querySelector(".wrapper")
let open_top= document.querySelector(".open1")
let open_bottom= document.querySelector(".open2")
let time = gsap.timeline({
  scrollTrigger: {
    trigger: wrapper,
    start: "5% 4%",
    end: "100% 0%",
    markers: false,
    scrub: 1,
    pin:true
  }
  })
time.to(open_top,{
  y:"-50vh",
 
 
},"ek")
time.to(open_bottom,{
  y:"50vh",
  // duration:1,
  
},"ek")

let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"mainWrite",
    start:"40% 10%",
    end:"150% 20%",
    scrub:true,
    // pin:true
    markers:false
  }
})
tl2.to(".mainWrite p",{
  scale:0.8,
  
})
tl2.to(".mainWrite p",{
  color:"#000",
},"l")
tl2.to(".mainWrite",{
  backgroundColor:"#fff",
},"l")
let firstPara = document.querySelector(".extraCont .firstPara")
let abTl = gsap.timeline({
  scrollTrigger:{
    trigger: firstPara,
    start:"-20% 100%",
    end:"10% 100%",
    scrub:true,
    markers:false,
  }
})
abTl.to(".open2 img",{
  display:"none"
})
let tl3  = gsap.timeline({
  scrollTrigger:{
    trigger:"extraCont",
    start:"200% 80%",
    end:"250% 70%",
    scrub:true,
    markers:false
  }
})

tl3.from(".imgDiv",{
  x:"50vw",
  y:"10vh"
},"p")
tl3.from(".firstPara p",{
  x:"-50vw",
  y:"10vh"
},"p")
let second = document.querySelector(".extraCont .secPara")
let tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:second,
    scrub:true,
    markers:false,
    start:"0% 80%",
    end:"70% 70%"
  }
})
tl4.from(".secPara p",{
  // x:"50vw",
  scale:"0.9",
  y:"50vh"
},"")

let third = document.querySelector(".extraCont .thirdPara")
let tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:third,
    start:"0% 80%",
    end:"70% 70%",
    markers:false,
    scrub:true
  }
})
tl5.from(".thirdPara p",{
  x:"50vw",
  y:"45vh"
},"s")
tl5.from(".thirdPara div",{
  x:"-50vw",
  y:"50vh"
},'s')