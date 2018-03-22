
//var fruits = ['Apple', 'Banana'];
//var newElem = fruits.push("Orange");
//var last = fruits.pop();// deletes the last element.
//var first = fruits.shift(); // removes the first element.
//var newLength = fruits.unshift("Lemon","Pineaple","Strawberry"); //lemon is the first element
//var pos =fruits.indexOf('Banana'); //We know the position of Banana.
//var removedItem=fruits.splice(pos,1); //The second element of the array will be deleted.
//alert(removedItem);
//alert(fruits.length); //2, because the array has 2 elements
//
//var first = fruits[0];
////alert (first); // shows the first element.
//
//var last = fruits [fruits.length - 1];
////alert (last); // shows the last element

//
//var vegetables = ['Cucumber','Tomato','Lettuce','Carrot'];
//alert (vegetables);
//var pos =1;
//var n=2;
//
//var removedItems = vegetables.splice(pos, n);
//alert (vegetables); //we removed 2 items, starting from position 1 til pos 2.
//alert(removedItems); //shows the elements that were deleted.
//
//var copy = vegetables.slice(); //we are going to copy vegetables array.
//alert (copy);

//var arr = ['this is the first element', 'this is the second element', 'this is the last element'];
//alert(arr[0]);  //shows the first element.            
//alert(arr[1]);   //shows the second element.             
//alert(arr[arr.length - 1]); //shows the last element.  

//var promise = {
//  'var'  : 'hello',
//  'array': [10, 20, 30, 40]
//};
//
//alert(promise['array']); // If you declare variable as an object, you have the chance to show the object that you want.

//var array1 = ['one', 'two', 'three'];
//var reversed = array1.reverse(); 
//
//alert(array1); // shows all the elements
//alert(reversed); //shows the elements reversed.


//var array1 = [1, 2, 3];
//
//alert(array1.includes(2));
//// exists number 2 on array
//
//var pets = ['cat', 'dog', 'bat'];
//
//alert(pets.includes('cat'));
//// exists cat on array
//
//alert(pets.includes('at'));
//// at does not exist.

//var numbers = [1, 1, 1, 1, 1, 1];
//var doubles = numbers.map(function(num) {
//  num = Math.floor(Math.random() * 60 +1);
//  alert(num);
//});

//var array1 = [5, 12, 8, 130, 44];
//
//var found = array1.find(function(element) {
//  return element > 10; //first elemement that accomplish the condition it will be shown
//});
//
//alert(found);
//// expected output: 12

values = [];
for (var x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
};
console.table(values);


