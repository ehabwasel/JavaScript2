/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */
//time function 
function displayCurrentTime() {
  var time = new Date();
  var hrs = time.getHours();
  var mis = time.getMinutes();
  var secs = time.getSeconds();

  hrs = checkTime(hrs);
  mis = checkTime(mis);
  secs = checkTime(secs);
  
  //declare paragraph to add the time 
  const para=document.createElement("P");
  document.body.appendChild(para);
  para.id="time";
  document.getElementById("time").innerHTML = "Time now is   "+hrs + ":" + mis + ":" + secs;
}
// to add zero in case of gitting in digit
function checkTime(m) {
  if (m < 10) {
    m = "0" + m;
  }
  return m;
}
//set time interval every 1 second
setInterval(displayCurrentTime, 1000);
//call the function 
displayCurrentTime();