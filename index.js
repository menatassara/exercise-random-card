window.onload = function () {
    changeCard();

    let button = document.getElementById("btnCard");
    button.addEventListener("click", function () {
        changeCard();
    })

    let card = document.getElementsByClassName("card")[0];
    let inputWidth = document.getElementById('inputWidth');
    let inputHeight = document.getElementById('inputHeight');

    // initial values
    inputHeight.value = card.clientHeight;
    inputWidth.value = card.clientWidth;

    inputWidth.addEventListener("input", function (event) {
        card.style.width = this.value + "px";
    })

    inputHeight.addEventListener("input", function (event) {
        card.style.height = this.value + "px";
    })
}


let interval;
let lastClass;

function changeCard() {

    clearInterval(interval);

    // This function will run when the page is loaded
    let cardValue = document.getElementById("cardValue");
    let icons = document.getElementsByClassName("icon");
    let suit = getRandomSuit();

    for (let i = 0; i < icons.length; i++) {


        icons[i].classList.remove(lastClass)


        icons[i].classList.add(suit);


        if (suit == "heart") {
            icons[i].innerHTML = "♥";
        } else if (suit == "spade") {
            icons[i].innerHTML = "♠";
        } else if (suit == "diamond") {
            icons[i].innerHTML = "♦";
        } else {
            icons[i].innerHTML = "♣";
        }

        console.log(icons[i].classList)
    }

    lastClass = suit

    cardValue.innerHTML = getRandomValue();
    interval = setInterval(changeCard, 10000);
}


// This function return a ramdon card value
function getRandomValue() {

    // value to return 
    let cardValue;
    // ramdon value 1 - 13
    let ramdonValue = Math.floor(Math.random() * 13) + 1;

    switch (ramdonValue) {
        case 1:
            cardValue = "A";
            break;
        case 11:
            cardValue = "J";
            break;
        case 12:
            cardValue = "Q";
            break;
        case 13:
            cardValue = "K";
            break;
        default:
            cardValue = ramdonValue;
            break;
    }

    return cardValue;
}


function getRandomSuit() {
    // value to return 
    let suitValue;
    // ramdon value 1 - 13
    let ramdonValue = Math.floor(Math.random() * 4);

    switch (ramdonValue) {
        case 0:
            suitValue = "heart";
            break;
        case 1:
            suitValue = "club";
            break;
        case 2:
            suitValue = "spade";
            break;
        default:
            suitValue = "diamond";
            break;
    }
    return suitValue;
}