// Inputs
const totalBill = document.getElementById("totalBill");
let customInput = document.getElementById("custom-input");
const peopleInput = document.getElementById("people-input");

const buttons = document.querySelectorAll(".grid-item");
// console.log(buttons);

// Text
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

// bill, tip, noOfPeoople
function calculateTip() {
    let tipPerPerson = parseFloat(
        (customInput * totalBill.value) / (100 * peopleInput.value)
    ).toFixed(2);
    let totalPerPerson = parseFloat(
        ((1 + customInput / 100) * totalBill.value) / peopleInput.value
    ).toFixed(2);
    return [tipPerPerson, totalPerPerson];
}

function Hello() {
    const [tip, total] = calculateTip();
    console.log(peopleInput.value);
    console.log(totalBill.value);
    if (totalBill.value && peopleInput.value) {
        tipAmount.textContent = "$" + `${tip}`;
        totalAmount.textContent = "$" + `${total}`;
    }
}

function Hellox(e) {
    console.log(e.target.value);
    customInput = Number(e.target.value);
}

function Hey(e) {
    customInput = Number(e.target.value);
    Hello()

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("active")) {
            buttons[i].classList.remove("active");
        }
        if (buttons[i].value == customInput) {
            buttons[i].classList.add("active")
            buttons[i].classList.add("active");
        }
    }
}
