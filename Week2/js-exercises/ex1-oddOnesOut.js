/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.*/

//  function doubleEvenNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//    return newNumbers;

'use strict';
const myNumbers = [1, 2, 3, 4];


function doubleEvenNumbers() { 
  return myNumbers.filter(item => item%2 ==0).map(item => item*2)
  
  
  
  //  this the second way of solution tradetionl way 
  //return myNumbers.filter(function (item) {
  //    return item % 2 == 0; 
     
       
  // }).map(function (item ) {
  //   return item*2
  // });
 
  
}

console.log(doubleEvenNumbers(myNumbers));