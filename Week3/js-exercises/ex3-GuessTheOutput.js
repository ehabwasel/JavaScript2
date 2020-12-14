/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();//It turnes 12

/*The Explination 
 It will alert the value of a = 12 because you declared (a) in the golobal scope so you have right to accsess its value from the expression function.(x)..
second you have an anonomous function that has a coluser for the outer function and it takes the value of (a) as 12 because its a closuer function so when we run a function we will get 12 */