console.log("Script connected");
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculateTip();
};

function calculateTip() {
  let billAmount = document.getElementById("billAmount").value;
  let serviceQuality = document.getElementById("serviceQuality").value;
  let numPeople = document.getElementById("totalPeople").value;

  if (billAmount === "" || serviceQuality == 0) {
    window.alert("Please enter some value!");
    return;
  }
  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  let total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  console.log(total);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}