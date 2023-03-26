function displayTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    var clock = document.getElementById('clock');
    clock.innerHTML = time;
  }
  
  // display the time immediately when the page loads
  displayTime();
  
  // update the time every 10 seconds
  setInterval(displayTime, 10000);
  