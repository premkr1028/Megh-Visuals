import {priceCardData} from "../extraDatas/extraData.js"

console.log(priceCardData)
let cardSection = document.querySelector(".cardSection")
priceCardData.map((card,ind) =>{
let data = `<div class="rounded-sm card flex flex-col  items-center">

            <p class="text-[1.2vw]">Editing for up to 1 minute long video with Basic cuts and transitions.</p>
            <p class="price">
              <span>&#8377;</span>45
            </p>
            <div class="line w-full h-[0.2px] bg-gray-400 my-[5px]"></div>
            <p class="text-[1.8vw]">
              Delivery within 1-day
            </p>
            <div class="btns flex gap-[20px] justify-center w-full mt-[10px]">
              <button class=" exBtn bg-gray-400 text-white px-[15px] h-[35px] rounded-[2px]  text-[1.5vw] uppercase">
                Example
              </button>

            </div>
          </div>`

  cardSection.innerHTML += data
})
