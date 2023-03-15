function displayNumbers()
{
    for(let num=1; num<=100; num++)
    {
        console.log(num);
    }
}
function displayDate()
{
    var datetime = new Date();
    let formatted_date = datetime.getDate() + "/" + (datetime.getMonth()+1) + "/" + datetime.getFullYear();
    console.log("Today's date: "+formatted_date);
}
function displayTemp(celsius)
{
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}
function average(...arr)
{
    var sum=0;
    for(let num of arr)
    {
        sum+=num;
    }
    return sum/arr.length;
}
function reverseString(str)
{
    return str.split('').reverse().join('');
}
displayNumbers();
displayDate();
let Celsius=40;
let fahrenheit = displayTemp(Celsius);
console.log(`${Celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
const numbers = [3,5,6,7,8,1,10,34,9,2];
var result = average(...numbers);
console.log(`Average of the given numbers: ${result}`);
console.log(reverseString("VARSHINI"));