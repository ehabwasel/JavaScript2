// Your code goes in here



//Custom function
function calculateTip(){


  //Store data of inputs
  let billAmount = document.getElementById("billAmount").value;
  let serviceQuality = document.getElementById("serviceQuality").value;
  let numPeople = document.getElementById("totalPeople").value;

  //Quick validation
  if(billAmount === "" || serviceQuality === 0){
    return window.alert("Please enter some values to get this baby up and running!"); //this will prevent the function from continuing
  }

  //Check to see if this input is empty or less than or equal to 1
  if(numPeople === "" || numPeople <= 1){
    numPeople = 1;

    document.getElementById("each").style.display = "none";

  } else {

    document.getElementById("each").style.display = "block";

  }

  //this is the amount of the bill
  let  total = (parseFloat(billAmount)+parseFloat (serviceQuality)) / numPeople;
  // console.log(total)


   //this is the second method if ypu want to calculate the amount of tip only not the total amount of bill  
  // let   total = (billAmount * serviceQuality) / numPeople;
  // total = Math.round(total * 100) / 100;
  // total = total.toFixed(2);
  //and i also would change the value of service in html file.
  

  //Display the tip!
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerText = total;
}

//Hide the  tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function(){ calculateTip(); }
