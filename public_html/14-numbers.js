//let n1 = +prompt ("n1?",0);
//let n2 = +prompt ("n2?",0);
//alert(n1 + n2);

//alert( 1.35.toFixed(1) ); // 1.4
//alert(Math.round(6.35*10) /10); // 6.3

//function readNumber() {
//  let num;
//
//  do {
//    num = prompt("Enter a number please?", 0);
//  } while ( !isFinite(num) );
//
//  if (num === null || num === '') return null;
//
//  return +num;
//}
//
//alert(`Read: ${readNumber()}`);

//let i = 0;
//while (i != 10) {
//  i += 0.2;
//}
//alert(i);

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );