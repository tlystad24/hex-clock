var hexcolor = document.getElementById('hexcolor');
var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function colorClock() {
  var time = new Date();
  var day = time.getDay();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = "0" + hours;
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  var clockStr = hours + " : " + minutes + " : " + seconds;
  var hexColorStr = "#" + hours + minutes + seconds;
  var dayStr = day;



  hexcolor.textContent = hexColorStr;
  

  document.getElementById('container').style.backgroundColor = hexColorStr;
  document.getElementById('hexcolor').style.color = hexColorStr;
}

colorClock();
setInterval(colorClock, 1000);
