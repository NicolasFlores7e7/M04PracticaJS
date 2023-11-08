
let randomNumSplit;
let trys = 0;                                              //Variable para contar los intentos, la inicializamos a 0
let win = false                                            //Variable para verificar si hemos ganado

document.addEventListener("DOMContentLoaded", function(){  //Generamos el numero aleatorio llamando la funcion
    let randomNum = generateRandonNumber();                //generateRandomNumber y lo dividimos en un array 
    randomNumSplit = randomNum.split('')
    console.log(randomNumSplit)
}); 

 let elementFocus = document.querySelector("input")         //Centramos el foco en el input
 elementFocus.focus();                                      //Para que sea mas eficiente hacemos que si hacemos
 elementFocus.addEventListener("keypress", function (e) {   //click en enter también se ejecute la funcion check
if (e.key === "Enter") {                                    //para que no estemos obligados a hacer click en el boton comprobar
        check();
    }
});

function generateRandonNumber(){                                    //Funcion para generar el numero aleatorio
    let randomNumber = Math.floor(Math.random()* 100000);           //Si hay menos de 5 valores se rellenan con 0
    randomNumber = randomNumber.toString().padStart(5, '0');
    return randomNumber;
}
function check(){                                                           //Funcíon que checkea el juego
    if(trys<5 && win!=true){                                                //Condicional para ejecuar el checkeo
                                                        
        let inputNumber = document.getElementById('userInput').value;       //Recibimos el input introducido por el usuario         
        inputNumber = inputNumber.padEnd(5, '0').slice(0, 5);               //Si no se han introducido suficientes valores los rellena con 0

        let rowContainer = document.createElement("div");                   //Creamos un a nueva fila
        rowContainer.className = "row";
        document.querySelector(".rowsContainer").appendChild(rowContainer);
    
        for (let i = 0; i < 5; i++){                                        //En este bucle for rellenamos la nueva fila con los 5 cuadrados
                                                                            //en un principio vienen por defecto con el color gris
    
            let newRow = document.createElement("div");
            newRow.className = "square";
            newRow.innerHTML = inputNumber[i];
            rowContainer.appendChild(newRow);
            if(randomNumSplit[i]== inputNumber[i]){                         //Condicionales para verificar si el numero coincide o lo contiene el 
                newRow.classList.add("green");                              //array del numero aleatorio, verde si coincide y amarillo si lo contiene
            } else if (randomNumSplit.includes(inputNumber[i])) {
                newRow.classList.add("yellow");
            }
        }

        if (randomNumSplit.every((value, index) => value === inputNumber[index])) { //Condicional para averiguar si hemos ganado
            win = true;                                                             //Se activa el boleano win
            document.getElementById("outputMessage").innerHTML = "HAS GANADO"       //Mensaje de victoria
            document.getElementById("outputMsg").style.backgroundColor = "green"    //Cambiamos el estilo del contenedor del mensaje
            changeTopSquares()                                                      //Llamamos a la funcion que cambia los cuadrados superiores
            reset();                                                                //Llamamos a la funcion que activa el boton de reset
            return;                                                                 //Terminamos la aplicación

        }
        trys++                                                                      //Aumentamos en 1 la variable de los intentos
        trysCalculator();                                                           //Llamamos a la funcion que cambia los mensajes de cada intento
        elementFocus.value = "";                                                    //Limpiamos el input     
        elementFocus.focus();                                                       //Volvemos a centrar el foco en el input
    
    
    } 
} 

function trysCalculator(){                                                         //Funcion que cambia el mensaje de los intentos
    
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
        changeTopSquares();
        reset();
        break;

    }
}
function changeTopSquares(){                                                       //Funcion que vambia los cuadrados superiores
    let squareOne = document.getElementById("1");                                  //Creamos una variable para cada cuadrado
    let squareTwo = document.getElementById("2");
    let squareThree = document.getElementById("3");
    let squareFour = document.getElementById("4");
    let squareFive = document.getElementById("5");

    squareOne.innerHTML = randomNumSplit[0]                                        //Le cambiamos el texto a cada cuadrado asignando
    squareTwo.innerHTML = randomNumSplit[1]                                        //el valor de cada cuadrado a su indice de la
    squareThree.innerHTML = randomNumSplit[2]                                      //array del numero aleatorio
    squareFour.innerHTML = randomNumSplit[3]
    squareFive.innerHTML = randomNumSplit[4]
}
function reset() {                                                                 //Funcion que activa el boton de reset
    let resultElement = document.querySelector('.result')                          //Seleccionamos el div con la clase result
    resultElement.innerHTML = `<button class="button">Restart</button>`            //Cambiamos el html de la clase result añadiendo el boton reset
    
    let resetButton = document.querySelector('.button');                           //Seleccionamos el botón recien creado
    resetButton.addEventListener('click', ()=>{                                    //Le añadimos el evento click
        location.reload();                                                         //Reiniciamos la pagina
    });
}