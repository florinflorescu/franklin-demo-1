import { createOptimizedPicture } from '../../scripts/lib-franklin.js';



 function displayTime() {
//     var date = new Date();
//     var time = date.toLocaleTimeString();
//     var clock = document.getElementById('clock');
//     clock.innerHTML = time;

  var date = new Date();
  var time = date.toLocaleTimeString();
  var clock = document.getElementsByClassName('clock');
  clock[0].innerHTML = time;

   }
  
//   // display the time immediately when the page loads
   displayTime();
  
//   // update the time every 10 seconds
   setInterval(displayTime, 10000);
  
   export default function decorate(block) {
    console.log("decorate clock");
    // const boxes = document.getElementsByClassName('clock');
    // console.log(boxes); // 👉️ [div.box, div.box, div.box]

    // const child = document.createElement('div');
    // child.innerHTML = `<h1>Hello world</h1>`;

    // boxes[0].appendChild(child);


   



   }