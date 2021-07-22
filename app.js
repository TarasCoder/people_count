const countMain = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const saveBtn = document.getElementById("saveBtn");
const savedInfo = document.getElementById("save-info");
const total = document.getElementById("total");
let numbers = [];

count = 0;

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);

function increment() {
  count++;
  countMain.innerText = count;
}
function save() {
    savedInfo.textContent += count + " - ";
    numbers.push(count);
    total.innerText = addingArray();
    count = 0;
    countMain.innerText = count;
}
function addingArray(){
    let result = 0;
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result;
}

