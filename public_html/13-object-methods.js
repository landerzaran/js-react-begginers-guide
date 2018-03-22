//
//let user = {
//  name: "John",
//  go: function() { alert(this.name) }
//};
//
//(user.go)()

//let calculator = {
//  sum(){
//      return this.n1 + this.n2;
//  },
//  mul(){
//      return this.n1 * this.n2;
//  },
//  read(){
//      this.n1 = +prompt("n1?",0);
//      this.n2 = +prompt("n2?",0);
//  }
//};
//
//calculator.read();
//alert( calculator.sum() );
//alert( calculator.mul() );

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1