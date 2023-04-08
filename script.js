let toggleBtn = document.querySelector(".toggle");
let toggleBtn2 = document.querySelector(".toggle2");
let toggleBtn3 = document.querySelector(".toggle3");
let btn_up = document.querySelector(".btn #firs")
let btn_down = document.querySelector(".btn #secon")
let speed = document.querySelector(".speeder")
let kmx = document.querySelector(".kmx")
let up = document.querySelector(".btn2 #f")
let down = document.querySelector(".btn2 #s")
let temp = document.querySelector(".temp")
let tem = document.querySelector(".tem")
let money = document.querySelector(".money")
let size = document.querySelector(".size")
let btn3 = document.querySelector(".btn3 #bt_up")
let btn3d = document.querySelector(".btn3 #bt_down")
let weel = document.querySelectorAll(".weel")
let car = document.querySelector(".car")
let seconds = document.querySelector(".second_line")
let third = document.querySelector(".third")
let black = document.querySelector(".black")
let pink = document.querySelector(".pink")
let white = document.querySelector(".white")

function tesla() {
btn_up.onclick = () => {
let total = +speed.innerHTML + 5
speed.innerHTML = total 
kmx.innerHTML = +kmx.innerHTML + 5 
   
}
btn_down.onclick = () => {
 speed.innerHTML = +speed.innerHTML - 5
 kmx.innerHTML = +kmx.innerHTML - 5 
}

up.onclick = () => {
   let tot = +temp.innerHTML + 1
   temp.innerHTML  = tot
   if(temp.innerHTML >= 11){
    tem.innerHTML = "Кондиционер"
 }
 }

 down.onclick = () => {
    let tot = +temp.innerHTML - 1
    temp.innerHTML  = tot
    if(temp.innerHTML <= 10){
        tem.innerHTML = "Печка"
     }
    
 }

 btn3.onclick = () => {
    size.innerHTML = "21"
    weel.forEach(w => {
        w.style.width = "9.98%"
    })
 }

 btn3d.onclick = () => {
    size.innerHTML = "19"
    weel.forEach(w => {
        w.style.width = "9.15%"
    })
 }


   
   toggleBtn.addEventListener("click", () => toggleBtn.classList.toggle("active"));
   toggleBtn2.onclick = () => {
    if(toggleBtn2.classList.contains("active")){
        toggleBtn2.classList.remove("active")
        money.innerHTML = "$89, 990"
     } else{
        toggleBtn2.classList.add("active")
        money.innerHTML = "$99, 500"
     }
   }
  
   car.onclick = () => {
   car.classList.add("act_car")
   car.classList.remove("car")
   seconds.classList.add("warn")
   third.classList.remove("warn")
    weel.forEach(w => {
        w.classList.add("warn")
    })
   }

   black.onclick = () => {
    car.style.background = `url(./img/black.svg)  no-repeat`
   
   }

   white.onclick = () => {
    car.style.background = `url(./img/white.svg)  no-repeat`
    
   }
  
   pink.onclick = () => {
    car.style.background = `url(./img/pink.svg) no-repeat`
    
   }


   toggleBtn3.onclick = () =>{
    if(toggleBtn3.classList.contains("active")){
        toggleBtn3.classList.remove("active")      
        car.classList.remove("act_car")
        car.classList.add("car")
        seconds.classList.remove("warn")
        third.classList.add("warn")
         weel.forEach(w => {
             w.classList.remove("warn")
         })
        } else {
            toggleBtn3.classList.add("active")
        }
   }
 
 
}


tesla() 









