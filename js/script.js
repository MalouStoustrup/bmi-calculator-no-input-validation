"use script";

function calculateBMI() {
    let height = parseFloat(prompt("Indtast din højde i cm:")); // parsefloat konvertere til et decimaltal
    let weight = parseFloat(prompt("Indtast din vægt i kg:"));
    
    // Valider input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Ugyldigt input! Indtast venligst en gyldig højde og vægt.");
        return;
    }
    
    // Beregn BMI
    let bmi = weight / ((height / 100) ** 2);
    let category = "";
    
    // Bestem BMI-kategori
    if (bmi < 16) {
        category = "Svært undervægtig";
    } else if (bmi >= 16 && bmi <= 18.4) {
        category = "Undervægtig";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normalvægt";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Overvægtig";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        category = "Moderat overvægtig";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
        category = "Svært overvægtig";
    } else {
        category = "Ekstremt overvægtig";
    }
    
    // Vis resultat
    alert(`Din BMI er: ${bmi.toFixed(2)}\nKategori: ${category}`);
}

// Kør BMI-beregneren
calculateBMI();