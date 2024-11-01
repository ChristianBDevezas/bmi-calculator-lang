const container = document.querySelector("main");
const btnCalc = document.getElementById('btn-calc');
const bmiParagraphs = document.querySelectorAll(".bmi__table p");
const showBmi = document.getElementById('show-bmi');
let index = 0;

btnCalc.addEventListener('click', calcBmi);

function removeSelectedBmi() {
    bmiParagraphs.forEach((paragraph) => {
        paragraph.classList.remove("color");
    });
}

function checkLanguage() {
    let language;
    if(container.classList.contains("eng-lang")) {
        language = 'eng';
    }
    if(container.classList.contains("port-lang")) {
        language = 'port';
    }

    return language;
}

function setFields(height, weight) {
    let langMessage1 = checkLanguage();

    if(langMessage1 == 'eng') {
        if(height == "") {
            showBmi.textContent = "Fill the height field!";
        }
        if(weight == "") {
            showBmi.textContent = "Fill the weight field!";
        }
        if(height == "" && weight == "") {
            showBmi.textContent = "Fill the height and weight fields!"
        }
    }
    if(langMessage1 == 'port') {
        if(height == "") {
            showBmi.textContent = "Preencha o campo altura!";
        }
        if(weight == "") {
            showBmi.textContent = "Preencha o campo peso!";
        }
        if(height == "" && weight == "") {
            showBmi.textContent = "Preencha os campos altura e peso!"
        }
    }

    let langFormula = checkLanguage();
    let bmi;

    if(height != "") {
        height = height.replace(",", ".");
        weight = weight.replace(",", ".");
    }

    if(langFormula == 'port') {        
        height = height / 100;
        bmi = weight / (Math.pow(height, 2));
    }

    if(langFormula == 'eng') {   
        bmi = 703 * (weight / (Math.pow(height, 2)));
    }
    
    bmi = bmi.toFixed(2);
    return bmi;
}

function calcBmi() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let bmiResult = setFields(height, weight);
    
    if(height != "" && weight != "") {
        showBmi.textContent = bmiResult;
        let langMessage2 = checkLanguage();

        if(langMessage2 == 'eng') {
            if(bmiResult < 18.5) {
                showBmi.textContent = `BMI is ${bmiResult} - Under weight`;
                index = 0;
            }
            else if(bmiResult >= 18.5 && bmiResult < 25) {
                showBmi.textContent = `BMI is ${bmiResult} - Normal weight`;
                index = 1;
            }
            else if(bmiResult >= 25 && bmiResult < 30) {
                showBmi.textContent = `BMI is ${bmiResult} - Overweight`;
                index = 2;
            }
            else if(bmiResult >= 30 && bmiResult < 35) {
                showBmi.textContent = `BMI is ${bmiResult} - Class 1 Obesity`;
                index = 3;
            }
            else if(bmiResult >= 35 && bmiResult < 40) {
                showBmi.textContent = `BMI is ${bmiResult} - Class 2 Obesity`;
                index = 4;
            }
            else if(bmiResult >= 40) {
                showBmi.textContent = `BMI is ${bmiResult} - Morbid Obesity`;
                index = 5;
            }
        }
        else {
            if(bmiResult < 18.5) {
                showBmi.textContent = `IMC é ${bmiResult} - Abaixo do peso`;
                index = 0;
            }
            else if(bmiResult >= 18.5 && bmiResult < 25) {
                showBmi.textContent = `IMC é ${bmiResult} - Peso normal`;
                index = 1;
            }
            else if(bmiResult >= 25 && bmiResult < 30) {
                showBmi.textContent = `IMC é ${bmiResult} - Sobrepeso`;
                index = 2;
            }
            else if(bmiResult >= 30 && bmiResult < 35) {
                showBmi.textContent = `IMC é ${bmiResult} - Obesidade grau 1`;
                index = 3;
            }
            else if(bmiResult >= 35 && bmiResult < 40) {
                showBmi.textContent = `IMC é ${bmiResult} - Obesidade grau 2`;
                index = 4;
            }
            else if(bmiResult >= 40) {
                showBmi.textContent = `IMC é ${bmiResult} - Obesidade grave`;
                index = 5;
            }
        }

        removeSelectedBmi();
        bmiParagraphs[index].classList.add("color");
    }
}