
// Type conversion is when we manually convert from one type to another.

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23));

// 1. Type coercion - is when JavaScript automatically converts types behind
// the scene for us.
// 2. Type coercion - happens whenever an operator is dealing with two
//                    values that have different types.

console.log('I am ' + 23 + ' years old. ');

console.log('23' - '10' - 3);
console.log('23' * '2');


let n = '1' + 1;  // '11' string (+ operator)
n = n - 1;        //  11  number (- operator) = 10
console.log(n);


// 1. Predict the result of these 5 operations without executing them:
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
// 2. Execute the operations to check if you were right