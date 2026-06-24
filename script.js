function calculateCalories() {
    console.log("Button clicked!");

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const resultBox = document.getElementById('result');
    const caloriesNum = document.getElementById('calories-num');

    if (weight && height && age) {
        let bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        
        caloriesNum.innerText = Math.round(bmr);
        resultBox.style.display = 'block';
        console.log("Result:", bmr);
    } else {
        alert("Please fill in all fields!");
    }
}