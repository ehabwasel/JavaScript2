/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  
    return val;
  
}
f1(x);
console.log(x)

//the result here it will be 9 because in this case (x is primitives data types)  so it's pass by value and doesnt change the original value

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);// in this case (y  by reference) it  is an object so  we change the original value of the object after passing the function.