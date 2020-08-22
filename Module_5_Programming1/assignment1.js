const wIncome = parseInt(prompt("weekly income?"));
const fCost = parseInt(prompt("food cost?"));
const hCost = parseInt(prompt("housing cost?"));
const tCost = parseInt(prompt("transportation cost?"));
const oCost = parseInt(prompt("other cost?"));
const savings = parseInt(prompt("how much you wanto to save in a year?"));
const weeklySavings = savings / 52;
const totalWeeklyCost = fCost + hCost + tCost + oCost;

const difference = wIncome - totalWeeklyCost;

if (difference < weeklySavings) {
  alert(`you need to save ${Math.round(weeklySavings - difference)} extra!`);
} else {
  alert("your're on the right track!");
}
