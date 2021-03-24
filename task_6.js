let input;
let numbers = [];
let total = 0;

while(true) {
    input = +prompt("Введите число");
 
     if (isNaN(input)) {
         alert("Введено не число!");
     } 
     if (input === 0) {
            break;
     } else if (!isNaN(input)) {
         numbers.push(input);
     }
 }
 function sumArray(arr){
     for(let i = 0;i<arr.length;i++){
         total += arr[i];
     }
     return total;
 }
 console.log(sumArray(numbers));

