const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculate = document.getElementById("calculate");
const bmiCal = document.getElementById("bmi");

const getBMI = (height, weight) => {
    const weightInt = Number(weight.value);
    const heightInt = Number(height.value / 100);

    // Validate input to avoid NaN or negative values
    if (
        isNaN(heightInt) ||
        isNaN(weightInt) ||
        heightInt <= 0 ||
        weightInt <= 0
    ) {
        alert(
            "Invalid input. Please enter valid positive numeric values for height and weight."
        );
        return;
    }
    let heightSquare = Math.pow(heightInt, 2);
    let bmi = weightInt / heightSquare;
    let classification;
    let bgColor;
    let textColor = "white";
    if (bmi < 18.5) {
        classification = "Underweight";
        bgColor = "yellow"
        textColor = "black"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        classification = "Normal Weight";
        bgColor = "green";
    } else if (bmi > 25 && bmi <= 29.9) {
        classification = "Overweight";
        bgColor = "yellow";
        textColor = "black"
    } else if (bmi > 30 && bmi <= 34.9) {
        classification = "Class I Obese";
        bgColor = "red";
    } else if (bmi > 35 && bmi <= 39.9) {
        classification = "Class II Obese";
        bgColor = "red";
    } else if (bmi > 40) {
        classification = "Class III Obese";
        bgColor = "red";
    }
    bmiCal.style.backgroundColor = bgColor
    bmiCal.style.color = textColor
    return (
        bmiCal.textContent = `your BMI IS ${bmi.toFixed(3)} (${classification})`
        );
};

calculate.addEventListener("click", () => getBMI(height, weight));

weight.value = "";
height.value = "";
