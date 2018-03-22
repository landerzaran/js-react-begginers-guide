//function pow(x, n) {
//  let result= (x**n);
//  return result;
//}
//
//let x = prompt("x?", '');
//let n = prompt("n?", '');
//
//if (n <= 1) {
//  alert("Power " +n+ " is not supported, use an integer greater than 0");
//} else {
//  alert( pow(x, n) );
//}

//function checkAge(age) {
//  return (age > 18) || confirm('Do you have your parents permission to access this page?');
//   
//}

function checkAge(age) {
   return (age > 18)? true: confirm('Do you have your parents permission to access this page?');
   
}