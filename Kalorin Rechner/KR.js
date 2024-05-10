function berechneKalorien() {
    var gewicht = parseFloat(document.getElementById("gewicht").value);
    var aktivitaetsgrad = parseFloat(document.getElementById("aktivitaetsgrad").value);
    
    if (!gewicht || gewicht <= 0) {
        alert("Bitte geben Sie Ihr Gewicht ein.");
        return;
    }

    var grundumsatz = 24 * gewicht;
    var gesamtumsatz = grundumsatz * aktivitaetsgrad;

    document.getElementById("ergebnis").innerHTML = "Ihr täglicher Kalorienbedarf beträgt etwa " + gesamtumsatz.toFixed(2) + " Kalorien.";

    // BMI-Berechnung
    var bmi = gewicht / ((1.8) * (1.8));
    document.getElementById("bmi").innerHTML = "Ihr Body-Mass-Index (BMI) beträgt etwa " + bmi.toFixed(2) + ".";
}
