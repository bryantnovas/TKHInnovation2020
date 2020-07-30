document.querySelector("#tip-form").onchange = () => {
  let bill = Number(document.getElementById("billTotal").value);
  let tip = document.getElementById("tipInput").value;
  document.getElementById("tipOutput").innerHTML = `${tip}%`;
  let tipValue = bill * (tip / 100);
  let finalBill = bill + tipValue;
  let tipAmount = document.querySelector("#tipAmount");
  let totalBillWithTip = document.querySelector("#totalBillWithTip");
  tipAmount.value = tipValue.toFixed(2);
  totalBillWithTip.value = finalBill.toFixed(2);

  //Show Results

  document.getElementById("results").style.display = "block";
  document.getElementById("results").style.WebkitTransition =
    "display  ease-in 1s";
  document.getElementById("results").style.MozTransition = "ease-in 1s";
};
