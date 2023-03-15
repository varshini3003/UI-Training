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

displayNumbers();
displayDate();
let Celsius=45;
displayTemp = celsius => (celsius * 1.8) + 32;
let fahrenheit = displayTemp(Celsius);
console.log(`${Celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
const numbers = [3,5,6,7,8,1,10,34,9,2];
function Average(numbers)
{
    var result = numbers.reduce((prevVal, currVal) => prevVal+currVal, 0);
    result/=numbers.length;
    console.log(`Average of the given numbers: ${result}`);
}
Average(numbers);
reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString("VARSHINI"));