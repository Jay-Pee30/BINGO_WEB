let BingoArray = [[], [], [], [], []];
let B = false,
    I = false,
    N = false,
    G = false,
    O = false;
   
function newNumber(maxNumber) {

let loop1 = true;
let loop2 = true;
let loop3 = true;
let loop4 = true;
let loop5 = true;

while (loop1 == true) {
    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x <= 15){

        if (!BingoArray[0].includes(x)) {
            BingoArray[0].push(x);
            document.querySelector("#td1").textContent = BingoArray[0][0];
            document.querySelector("#td6").textContent = BingoArray[0][1];
            document.querySelector("#td11").textContent = BingoArray[0][2];
            document.querySelector("#td16").textContent = BingoArray[0][3];
            document.querySelector("#td21").textContent = BingoArray[0][4];

            if (BingoArray[0][0,1,2,3,4] != null) {
                B = true;
            loop1 = false;
            }
            
          }
          


    }
}

while (loop2 == true) {

    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x >= 16 && x <= 30){

        if (!BingoArray[1].includes(x)) {
            BingoArray[1].push(x);
            
            document.querySelector("#td2").textContent = BingoArray[1][0];
            document.querySelector("#td7").textContent = BingoArray[1][1];
            document.querySelector("#td12").textContent = BingoArray[1][2];
            document.querySelector("#td17").textContent = BingoArray[1][3];
            document.querySelector("#td22").textContent = BingoArray[1][4];
            
          }
          if (BingoArray[1][0,1,2,3,4] != null) {
            I = true;
        loop2 = false;
        }


    }
}
while (loop3 == true) {

    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x >= 31 && x <= 45){

        if (!BingoArray[2].includes(x)) {
            BingoArray[2].push(x);
            
            document.querySelector("#td3").textContent = BingoArray[2][0];
            document.querySelector("#td8").textContent = BingoArray[2][1];
            document.querySelector("#td13").textContent = BingoArray[2][2];
            document.querySelector("#td18").textContent = BingoArray[2][3];
            document.querySelector("#td23").textContent = BingoArray[2][4];
            
          }
          
          if (BingoArray[2][0,1,2,3,4] != null) {
            N = true;
        loop3 = false;
        }

    }
}
while (loop4 == true) {

    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x >= 46 && x <= 60){

        if (!BingoArray[3].includes(x)) {
            BingoArray[3].push(x);
            
            document.querySelector("#td4").textContent = BingoArray[3][0];
            document.querySelector("#td9").textContent = BingoArray[3][1];
            document.querySelector("#td14").textContent = BingoArray[3][2];
            document.querySelector("#td19").textContent = BingoArray[3][3];
            document.querySelector("#td24").textContent = BingoArray[3][4];
            
          }
          
          if (BingoArray[3][0,1,2,3,4] != null) {
            G = true;
        loop4 = false;
        }

    }
}
while (loop5 == true) {

    let x = Math.floor(Math.random() * maxNumber) + 1;
    if (x >= 61 && x <= 75){

        if (!BingoArray[4].includes(x)) {
            BingoArray[4].push(x);
            
            document.querySelector("#td5").textContent = BingoArray[4][0];
            document.querySelector("#td10").textContent = BingoArray[4][1];
            document.querySelector("#td15").textContent = BingoArray[4][2];
            document.querySelector("#td20").textContent = BingoArray[4][3];
            document.querySelector("#td25").textContent = BingoArray[4][4];
            
          }
          
          if (BingoArray[4][0,1,2,3,4] != null) {
            loop5 = false;
            O = true;
        }

    }
}


}

while (!B || !I || !N || !G || !O) {
    newNumber(75);

    if (B || I || N || G || O) {
        console.log(`BINGOOOO!!!`);
    }
}