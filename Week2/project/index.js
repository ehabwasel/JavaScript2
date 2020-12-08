/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  disabled minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up1!
 * 
 */

'use strict';

//getting all the needed elements:
const upBtn = document.getElementById('add-time');
const dwon = document.getElementById('decrease-time');
const setSessionLength = document.getElementById('duration-select');
const minutesIndicator = document.getElementById('minutes');
const secondsIndicator = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const restartBtn = document.getElementById('stop');
let countDownInt;
const interval = 1000;
const time = new Date();
let minute = 25;

//the follwing function for adding minutes and remove 
function add(){
  minute++;
  setSessionLength.textContent=(minute);
  reset()
}
function remove(){
  minute--;
  setSessionLength.textContent=(minute);
  reset()
}
//this function for set minutes to new minutes
 function reset(){
  time.setMinutes(minute);
  time.setSeconds(0);
  showTime();
 }
 //this function to display the new time 
  function showTime(){
    minutesIndicator.textContent=disabled(time.getMinutes());
    secondsIndicator.textContent=disabled(time.getSeconds());
    
  }
  //thid function to display the time as two digits format
  function disabled (number){
    return(`0`+ number).slice(-2)
  }
 // this is the count dwon function 
  function count(){
    if (time.getMinutes()===0 &&time.getSeconds()===0){
      minutesIndicator.textContent="time out";
      secondsIndicator.textContent=""
    }
    else{
      time.setSeconds(time.getSeconds()-interval/1000);
    }
    showTime()
  }
  //this function to decrisw the seconds by one every time
  function play(){
    countDownInt=setInterval(count,interval);
    stopBtn()
  }

  ///these are the condition of buttons 
  function  stopBtn(){
   if(countDownInt){
    startBtn.disabled=true;
    upBtn.disabled=true;
    dwon.disabled=true;
   }
   
  else{
    startBtn.disabled=false;
    upBtn.disabled=false;
    dwon.disabled=false;
  }
  }

  function pause(){
    clearInterval(countDownInt);
    countDownInt = false;
    startBtn.disabled=false;

  }
  function restBtn(){
    clearInterval(countDownInt);
    countDownInt =false;
    reset();
    stopBtn()
  }
  //call the set function to display the time as 25 minutes 
  reset()
  // click events with the functions
  upBtn.addEventListener("click",add)
  dwon.addEventListener("click",remove)
  startBtn.addEventListener("click",play)
  pauseBtn.addEventListener("click",pause)
  restartBtn.addEventListener("click",restBtn)
  