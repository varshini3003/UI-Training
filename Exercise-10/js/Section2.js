const players = ["Sachin", "Dhoni", "Shehwag", "Ganguly", "Yuvraj", "Hardik", "Ashwin", "Jadeja", "Raina", "Kohli", "Rohit"];
console.log(players);
const injuredPlayer = players.indexOf("Jadeja");
players.shift();
console.log(players);
console.log(players.length);
players.unshift("Ishan");
console.log(players);
players.sort();
console.log(players);
var uniqueNumbers = [];
const nums = new Set();
while(nums.size !== 11) 
{
  nums.add(Math.floor(Math.random() * 100) + 1);
}
for(let i=0; i<11; i++)
{
    players[i]=players[i]+"-"+ Array.from(nums)[i];
}
console.log(players);
const jerseys = players.map(player => player.toUpperCase());
console.log(jerseys);
console.log(players);