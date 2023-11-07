function generateRandonNumber(){
    let randomNumber = Math.floor(Math.random()* 100000);
    randomNumber = randomNumber.toString().padStart(5, '0');
    return randomNumber;
}
let randomNumSplit;
document.addEventListener("DOMContentLoaded", function(){
    let randomNum = generateRandonNumber();
    randomNumSplit = randomNum.split('')
    console.log(randomNumSplit)
});

let trys = 0

function check(){
    let inputNumber = document.getElementById('userInput').value;

    for (let i = 0; i < 5; i++){
        let newRow = document.createElement("div");
        newRow.className = "square";
        newRow.innerHTML = inputNumber[i];
        document.querySelector(".row").appendChild(newRow);
        trys++
        console.log(inputNumber[i]);
    }
  
}  
    
    
    

    
