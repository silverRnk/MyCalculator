
function changeBodyToCalculator(){
  document.getElementById('mainContent').src = "Calculator/Calculator.html";
}

function changeBodyToAbout(){
  document.getElementById('mainContent').src = "About/About.html";
}

document.getElementById("calculatorNavigationButton").onclick = changeBodyToCalculator;

document.getElementById("aboutNavigationButton").onclick = changeBodyToAbout;
