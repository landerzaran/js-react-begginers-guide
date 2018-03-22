//function User(name,surname,age){
//    this.name = name;
//    this.surname = surname;
//    this.age = age;
//}
//let lander = new User("Lander","Zarandona",21);
//alert (lander.name + " "+lander.surname + " "+lander.age);

//-----------

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let lander = new User("John", new Date(1997, 12, 1));

alert( lander.birthday ); // birthday is available
alert( lander.age );      // ...as well as the age
