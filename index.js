const height = document.getElementById("height")
const weight = document.getElementById("weight")
const calculate = document.getElementById("calculate")
const bmiCal = document.getElementById("bmi")

const weightInt = Number(weight.value)
const heightInt = Number(height.value / 100)
console.log(weightInt)

const getBMI = (height, weight) => {
    console.log(height)
    let heightSquare = Math.pow(height, 2)
    console.log(heightSquare)
    let bmi = weight / heightSquare
    console.log(Math.round(bmi), bmi)
    
    return bmiCal.textContent = `your BMI IS ${bmi}`
}



calculate.addEventListener("click", () => getBMI(heightInt, weightInt))

