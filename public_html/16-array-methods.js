//let names = ["background-color","list-style-image","-webkit-transition"]
//function camelize(str){
//    
//}
//function camelize(str) {
//    return str
//            .split('-') // my-long-word -> ['my', 'long', 'word']
//            .map(
//                    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//            ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
//            .join(''); // ['my', 'Long', 'Word'] -> myLongWord
//    alert(str);
//}

//-----------------------------------------------------------------
//let arr = [5, 2, 1, -10, 8];
//arr.sort((a, b) => b - a);
//alert( arr ); 

//let arr = ["HTML", "JavaScript", "CSS"];
//let sorted = copySorted(arr);
//alert( arr );
//alert( sorted );
//function copySorted(arr) {
//  return arr.slice().sort(); //we use slice to make a copy and sort of the array.
//}

//-----------------------------------------------------------------
//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 28 };
//
//let users = [ john, pete, mary ];
//
//let names = users.map(item => item.name); //we use it to show the names of the people.
//
//alert( names ); 

//-----------------------------------------------------------------
//let john = { name: "John", surname: "Smith", id: 1 };
//let pete = { name: "Pete", surname: "Hunt", id: 2 };
//let mary = { name: "Mary", surname: "Key", id: 3 };
//
//let users = [ john, pete, mary ];
//
//let usersMapped = users.map(user => ({
//  fullName: `${user.name} ${user.surname}`, //fullname now has a name and a surname.
//  id: user.id
//}));
//
//alert( usersMapped[0].id ) ; // 1
//alert( usersMapped[0].fullName ) ; // John Smith
//-----------------------------------------------------------------

//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 28 };
//
//let arr = [ john, pete, mary ];
//
//function sortByName(arr) {
//  arr.sort((a, b) => a.name > b.name);
//}
//sortByName(arr);
//// [john, Mary, pete]
//alert(arr[1].name); // Mary because it's second element of the array. [0,1,2].

//-----------------------------------------------------------------

//let arr = [1, 2, 3];
//function shuffle(array){
//  array.sort(() => Math.random() -0.5);  
//}
//shuffle(arr);
//alert(arr);

//-----------------------------------------------------------------


//function getAverageAge(users) {
//  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//}
//
//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 29 };
//
//let arr = [ john, pete, mary ];
//
//alert( getAverageAge(arr) );

//-----------------------------------------------------------------

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); 



