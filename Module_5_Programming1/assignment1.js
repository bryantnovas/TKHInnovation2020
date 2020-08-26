const wIncome = parseInt(prompt("weekly income?"));
const fCost = parseInt(prompt("weekly food cost?"));
const hCost = parseInt(prompt("weekly housing cost?"));
const tCost = parseInt(prompt("weekly transportation cost?"));
const oCost = parseInt(prompt("other weekly cost?"));
const savings = parseInt(prompt("how much you want to save in a year?"));
const weeklySavings = savings / 52;
const totalWeeklyCost = fCost + hCost + tCost + oCost;

const difference = wIncome - totalWeeklyCost;

if (difference < weeklySavings) {
  alert(`you need to save ${Math.round(weeklySavings - difference).toFixed(2)} extra!`);
} else {
  alert("your're on the right track!");
}
