const players = ["Sachin", "Dhoni", "Shehwag", "Ganguly", "Yuvraj", "Hardik", "Ashwin", "Jadeja", "Raina", "Kohli", "Rohit"];
console.log(players);
const injuredPlayer = players.indexOf("Jadeja");
players.splice(injuredPlayer,1);
console.log(players);
console.log(players.length);
players.push("Ishan");
console.log(players);
players.sort();
console.log(players);
for(let i=0; i<11; i++)
{
    players[i]=players[i]+"-"+(i+1);
}
console.log(players);
jerseys = players.map(player => player.toUpperCase());
console.log(jerseys);
console.log(players);