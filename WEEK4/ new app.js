const calculation = require('./calculation.js');
//Initial Values
var hoursWorked = 8;
var hourlyRate = 500;
var daysperWeek = 4;
//Calculating Gross Income and Tax Rate
var grossIncome = calculation.multiply(calculation.multiply(hoursWorked,hourlyRate),daysperWeek);
var tax = 0.10; //15% tax rate
var taxRate = calculation.multiply(tax, grossIncome); 

var SSS = 1200;
var PAGIBIG = 300;
var PhilHealth = 400;

//Calculations
console.log("The gross income is", grossIncome);

console.log("Tax:", taxRate);
console.log("SSS:", SSS);
console.log("Pag-Ibig fund:", PAGIBIG);
console.log("PhilHealth:", PhilHealth);
// Add Tax, SSS, Pag-Ibig, and PhilHealth
console.log("Total deductions:", calculation.add(calculation.add(taxRate, SSS), calculation.add(PAGIBIG, PhilHealth)));
console.log("Net Salary:", calculation.subtract(grossIncome, calculation.add(calculation.add(taxRate, SSS), calculation.add(PAGIBIG, PhilHealth))));