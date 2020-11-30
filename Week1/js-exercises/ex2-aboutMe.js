/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */


// changing the font family of the body
const body=document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

//adding my name to the nickaName li

const name=document.getElementById("nickname");
name.innerText = "Ehab Wasel..";

// adding the my favorite food 
const food=document.getElementById("fav-food");
food.innerText = "Fish..";

// adding my hometown 
const home=document.getElementById("hometown");
home.innerText = " Egypt -Cairo";

// changing the className of the list items
const ul =document.querySelector("ul").getElementsByTagName("li");
for(i=0; i<ul.length; i++){
 ul[i].className += "list-item";

}
// append my image 
const img=document.createElement("img");
img.src="Aboutme.JPG";
img.style.width="300px"
body.appendChild(img);
