 // Set the date we're counting down to
var countDownDate = new Date("07/12/2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  if((days + "").length === 1){
    days = "0" + days;
}
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if((hours + "").length === 1){
    hours = "0" + hours;
}
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  if((minutes + "").length === 1){
    minutes = "0"+ minutes;
}
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if((seconds + "").length === 1){
    seconds = "0"+ seconds;
}

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days+ ":" + hours + ":" + minutes + ":" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Happy Birthday Kenneth!!!";
  }
}, 1000);

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function menubox() {
  var x = document.getElementById("menu-box");
  if (x.style.display === "block"){
    x.style.display = "none";
  } else{
    x.style.display = "block"
  }
}
