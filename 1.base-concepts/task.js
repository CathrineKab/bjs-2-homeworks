'use strict';

// задача 1

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  
  if (d > 0) {
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
    return arr;
  } else if (d == 0) {
    arr.push(-b/2*a);
    return arr;
  } else if (d < 0) {
    return arr;
  } 
} 

//задача 2

function calculateTotalMortgage (percent, contribution, amount, date) {
 let totalAmount;
 let d = new Date();
  percent = percent / 100;
  let P = percent / 12;
  let creditPrincipal = amount - contribution;
  let months = Math.round((date - d) / 2678400000);
  let monthlyFee;

  if ((percent <= 0) || (isNaN(percent))) {
    return 'Параметр "Процентная ставка" содержит неправильное значение "test"';
    } 
  if ((contribution < 0) || (isNaN(contribution))) {
    return 'Параметр "Начальный взнос" содержит неправильное значение "test"';
    } 
  if ((amount <= 0) || (isNaN(amount))) {
    return 'Параметр "Общая стоимость" содержит неправильное значение "test"';
    } 
  if (date <= d) {
    return 'Срок ипотеки не может быть меньше или равен текущей даты!';
  } else if (isNaN(date)) {
    return 'Введите дату в поле Срок ипотеки!';
  }

  monthlyFee = creditPrincipal*(P + (P/(((1 + P)**months) - 1)));
  totalAmount = monthlyFee * months;
  return Number (totalAmount.toFixed(2));
  console.log(`Общая сумма по ипотеке составляет ${totalAmount}`);
}
