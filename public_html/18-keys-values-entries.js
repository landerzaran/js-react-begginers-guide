let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(salaries){
    for (let salary of Object.values(salaries)) {
        sum += salary;
      }
    
      return sum;
      
    }
    


