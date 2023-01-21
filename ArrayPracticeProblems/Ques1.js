function RandomNumber()
{
    let x = Math.floor(Math.random() * 900) + 100;
    return x;
}

let RandomArray = [];
for (var i = 1; i <= 10; i++)
{
    let rn = RandomNumber()
    console.log("value " + i + ": " + rn)
    RandomArray.push(rn)
}
console.log("printing the array")
console.log(RandomArray)
// 
// var str = RandomArray.join(' ');
// console.log(str + "\n")
// RandomArray.forEach(element => console.log(element));

// let SortArray = [];
// SortArray = RandomArray.sort()
// console.log(RandomArray[1])
//console.log(RandomArray[RandomArray.length-2])

let max1 = RandomArray[0];
let max2 = 0;
for ( var i = 1; i < RandomArray.length; i++)
{
    if(RandomArray[i] > max2)
    {
        if (RandomArray[i] > max1)
        {
            max2 = max1;
        max1 = RandomArray[i];
        }
        else
        {
            max2 = RandomArray[i];
        }
    }
}
console.log(max2)

let min1 = RandomArray[0];
let min2 = 1000;
for ( var i = 1; i < RandomArray.length; i++)
{
    if(RandomArray[i] < min2)
    {
        if (RandomArray[i] < max1)
        {
            min2 = min1;
        min1 = RandomArray[i];
        }
        else
        {
            min2 = RandomArray[i];
        }
    }
}
console.log(min2)