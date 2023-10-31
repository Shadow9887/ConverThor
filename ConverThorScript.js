document.addEventListener("DOMContentLoaded", function() {
let density = 1, selectedVolume, userVolumeInput = 0, calculationResult, invalidInputCode;
gramsLabel.style.display = "none";
mlLabel.style.display = "none";
ingredientDiv.style.display = "none";

liquidChoice.addEventListener("change", function() {
    if (liquidChoice.checked) {
      mlLabel.style.display = "inline";
      gramsLabel.style.display = "none";
      ingredientDiv.style.display = "none";
      console.log("Liquid selected");
    }
  });

  solidChoice.addEventListener("change", function() {
    if (solidChoice.checked) {
      mlLabel.style.display = "none";
      gramsLabel.style.display = "inline";
      ingredientDiv.style.display = "inline";
      console.log("Solid selected");
    }
  });
  document.getElementById("calculateBtn").onclick = function(){
    userVolumeInput = Number(fromConversionInput.value);
    if (isNaN(userVolumeInput) || userVolumeInput == 0) {
      invalidInputCode = 1;
    }
    console.log(userVolumeInput);
    // Volume setting switch
    switch (true) {
      case bottlecapBtn.checked:
        selectedVolume = 5;
        console.log("bottle cap selected");
        break;
      case shotglassBtn.checked:
        selectedVolume = 40;
        console.log("shot glass selected");
        break;
      case plasticcupBtn.checked:4321431
        selectedVolume = 200;
        console.log("plastic cup selected");
        break;
      default:
        invalidInputCode = 2;
        break;
    }
    if (solidChoice.checked) {   
    // Density setting switch
      switch (true) {
        case flourChoice.checked:
          density = 0.59;
          console.log("flour selected " + density);
          break;
        case sugarChoice.checked:
          density = 0.85;
          console.log("sugar selected " + density);
          break;
        case butterChoice.checked:
          density = 0.96;
          console.log("butter selected " + density);
          break;
        case yeastChoice.checked:
          density = 0.68;
          console.log("yeast selected " + density);
          break;
        default:
          invalidInputCode = 3;
          break;
      }
    }
    calculationResult = userVolumeInput/density;
    calculationResult /= selectedVolume;
    calculationResult = calculationResult.toFixed(1);
    // Switch that checks for input errors in order to display the correct instruction to the user
    switch (invalidInputCode) {
      case 1:
        resultParagraph.textContent = "Result: Invalid amount!";
        break;
      case 2:
        resultParagraph.textContent = "Result: No measurement selected!";
        break;
      case 3:
        resultParagraph.textContent = "Result: No ingredient selected!";
        break;
      default:
        resultParagraph.textContent = "Result: " + calculationResult;
    }
    invalidInputCode = 0;
  }
});
