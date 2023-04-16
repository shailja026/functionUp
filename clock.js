let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


function letsDisplayTime(){
    let date = new Date();

    // getting hours , min and second from date


    let hh = date.getHours();
    let mm = date.getMinutes();
   let sece = date.getSeconds();

   let hourHandRotation = 30*hh + mm/2;
   let MinRotation = 6*mm;
   let SecRotation = 6*sece;

   hr.style.transform = `rotate(${hourHandRotation}deg)`;
   min.style.transform = `rotate(${MinRotation}deg)`;
   sec.style.transform = `rotate(${SecRotation}deg)`;




}

setInterval(letsDisplayTime , 1000);



