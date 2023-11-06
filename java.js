let word = numToGuess = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000).toString();
let wordArray = word.toUpperCase().split('');
console.log(wordArray)
let actualRow = document.querySelector('.row');

let resultElement = document.querySelector('.result')
let mainContainer = document.querySelector('.mainContainer')
let rowId = 1;

drawSquares(actualRow);
listenInput(actualRow)

addFocus(actualRow);


function listenInput(actualRow){
    let squares = actualRow.querySelectorAll('.square');
    squares = [...squares];
    
    let userInput = []

    squares.forEach(element => {
        element.addEventListener('input', event =>{
            userInput.push(event.target.value.toUpperCase());
            if(event.target.nextElementSibling){
                event.target.nextElementSibling.focus();
            }else{
                let existIndexArray = existChar(wordArray, userInput) 
                existIndexArray.forEach(element => {
                 
                 squares[element].classList.add('yellow')
                })
              let rightIndex = compareArrays(wordArray, userInput)
              rightIndex.forEach(element => {
                squares[element].classList.add('green');
              })
              if(rightIndex.length == wordArray.length){
                showResult('You Win!');
                return;
                }
    
               let actualRow = createRow();
                if (!actualRow){
                    return;
                }
                drawSquares(actualRow)
                listenInput(actualRow);
                addFocus(actualRow);
             }
        });
    })
}



function drawSquares(actualRow){
    wordArray.forEach((item, index) => {
        if (index === 0){
            actualRow.innerHTML += `<input type="text" placeholder="*" maxlength="1" class="square focus"></input>`
        }else{
            actualRow.innerHTML += `<input type="text" placeholder="*" maxlength="1" class="square"></input>`
    
        }
    });
}

function compareArrays(array1, array2){
    let equalsIndex = []
    array1.forEach((element, index)=>{
        if(element == array2[index]){
            equalsIndex.push(index);
        }
    })
    return equalsIndex;
}

function existChar(array1, array2){
    let existIndexArray = []
    array2.forEach((element, index)=>{
        if(array1.includes(element)){
            existIndexArray.push(index)
        }
    })
    return existIndexArray;
}

function createRow(){
    rowId++
    if(rowId <= 5){
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.setAttribute('id', rowId)
        mainContainer.appendChild(newRow)
        return newRow;
    
    }else{
        showResult(`You Lose T-T, correct answer was ${word}`);

    }
    
}

function addFocus(actualRow){
    let focusElement = actualRow.querySelector('.focus')
    focusElement.focus();
}
function showResult(textMsg){
    resultElement.innerHTML = `<p>${textMsg}</p>
    <button class="button">Restart</button>`
    
    let resetButton = document.querySelector('.button');
    resetButton.addEventListener('click', ()=>{
        location.reload();
        });
}
