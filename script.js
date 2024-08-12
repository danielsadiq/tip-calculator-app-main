// Input Boxes
const bill = document.getElementById("totalBill");
const people = document.getElementById("people");

const tips = document.querySelectorAll(".grid-item");

// The Values 
const totalAmount = document.getElementById("total-amount");
const perPerson = document.getElementById("perPerson")


let tip = 5;
for (let i=0; i<tips.length; i++){
    tips[i].addEventListener("click", function(e){
        for (let i=0; i<tips.length-1; i++){
            tips[i].classList.remove("active");
        };
        e.target.classList.add("active");
        console.log(Number(e.target.innerText.slice(0,-1)));
        tip = Number(e.target.innerText.slice(0,-1));
    });
};
function Hello(){
    let billVal = bill.value;
    let total = ((1+(tip/100))*billVal).toFixed(2);
    let each = total/people.value;
    if (each == Infinity){
        each = total;
    }
    totalAmount.innerText = "$"+total
    perPerson.innerText = "$"+each.toFixed(2)
    console.log(each.toFixed(2));
}