
let randomNumSplit;
let trys = 0;
let win = false

document.addEventListener("DOMContentLoaded", function(){
    let randomNum = generateRandonNumber();
    randomNumSplit = randomNum.split('')
    console.log(randomNumSplit)
}); 

 let elementFocus = document.querySelector("input")
 elementFocus.focus();


function generateRandonNumber(){
    let randomNumber = Math.floor(Math.random()* 100000);
    randomNumber = randomNumber.toString().padStart(5, '0');
    return randomNumber;
}
function check(){
    if(trys<5 && win!=true){
        
        let inputNumber = document.getElementById('userInput').value;
        let rowContainer = document.createElement("div");
        rowContainer.className = "row";
        document.querySelector(".rowsContainer").appendChild(rowContainer);
    
        for (let i = 0; i < 5; i++){
          
    
            let newRow = document.createElement("div");
            newRow.className = "square";
            newRow.innerHTML = inputNumber[i];
            rowContainer.appendChild(newRow);
            if(randomNumSplit[i]== inputNumber[i]){
                newRow.classList.add("green");
            } else if (randomNumSplit.includes(inputNumber[i])) {
                newRow.classList.add("yellow");
            }
        }

        if (randomNumSplit.every((value, index) => value === inputNumber[index])) {
            win = true;
            document.getElementById("outputMessage").innerHTML = "HAS GANADO"
            document.getElementById("outputMsg").style.backgroundColor = "green"
            changeTopSquares()
            reset();
            return;

        }
        console.log(win)
        trys++
        trysCalculator();
        elementFocus.focus();
    
    
    } 
} 

function trysCalculator(){
    
    switch(trys){
        case 1:
        document.getElementById("outputMessage").innerHTML = "Segundo intento"
        break;
        case 2:
        document.getElementById("outputMessage").innerHTML = "Tercer intento"
        break;
        case 3:
        document.getElementById("outputMessage").innerHTML = "Cuarto Intento"
        break;
        case 4:
        document.getElementById("outputMessage").innerHTML = "Último intento"
        break;
        case 5:
        document.getElementById("outputMessage").innerHTML = "Has perdido"
        reset();
        break;

    }
}
function changeTopSquares(){
    let squareOne = document.getElementById("1");
    let squareTwo = document.getElementById("2");
    let squareThree = document.getElementById("3");
    let squareFour = document.getElementById("4");
    let squareFive = document.getElementById("5");

    squareOne.innerHTML = randomNumSplit[0]
    squareTwo.innerHTML = randomNumSplit[1]
    squareThree.innerHTML = randomNumSplit[2]
    squareFour.innerHTML = randomNumSplit[3]
    squareFive.innerHTML = randomNumSplit[4]
}
function reset() {
    let resultElement = document.querySelector('.result')
    resultElement.innerHTML = `<button class="button">Restart</button>`
    
    let resetButton = document.querySelector('.button');
    resetButton.addEventListener('click', ()=>{
        location.reload();
    });
}
 

    

    
