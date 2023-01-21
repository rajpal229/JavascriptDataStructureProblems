var readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Enter Number: ");

for (var i =2; i < number; i++)
    {
        if (number % i == 0)
        {
            console.log(i + " is a factor of " + number)
        }
    }