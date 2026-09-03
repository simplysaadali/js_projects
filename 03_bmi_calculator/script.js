const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (isNaN(height) || height <= 0 || height === "") {
        results.innerHTML = "Please enter a valid height";
        results.style.color = "red";
        return;
    }

    if (isNaN(weight) || weight <= 0 || weight === "") {
        results.innerHTML = "Please enter a valid weight";
        results.style.color = "red";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is ${bmi}`;

    if (Number(bmi) < 18.5) {
        results.innerHTML += "<br>You're underweight";
        results.style.color = "red";
    } else if (Number(bmi) >= 18.5 && Number(bmi) <= 24.9) {
        results.innerHTML += "<br>You're healthy";
        results.style.color = "green";
    } else if (Number(bmi) >= 25 && Number(bmi) <= 30) {
        results.innerHTML += "<br>You're overweight";
        results.style.color = "orange";
    } else {
        results.innerHTML += "<br>You're obese";
        results.style.color = "red";
    }
});