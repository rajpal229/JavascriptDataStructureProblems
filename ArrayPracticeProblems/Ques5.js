var readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Enter Number: ");

let answer = new Array();
for (var i =10; i < number; i++)
    {
        if (i % 10 == Math.floor(i / 10))
        {
            answer.push(i)
        }
    }
console.log(answer)