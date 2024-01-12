const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculate = document.getElementById("calculate");
const bmiCal = document.getElementById("bmi");

const getBMI = (height, weight) => {
    const weightInt = Number(weight.value);
    const heightInt = Number(height.value / 100);
    
    // Validate input to avoid NaN or negative values
    if (isNaN(heightInt) || isNaN(weightInt) || heightInt <= 0 || weightInt <= 0) {
        alert("Invalid input. Please enter valid positive numeric values for height and weight.");
        return;
    }
    let heightSquare = Math.pow(heightInt, 2);
    let bmi = weightInt / heightSquare;
    return (bmiCal.textContent = `your BMI IS ${bmi.toFixed(3)}`);
};

calculate.addEventListener("click", () => getBMI(height, weight));

weight.value = ""
height.value = ""
