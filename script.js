const caseFirst = document.querySelector('.caseChoice img');

let wallet = document.querySelector('.amout')
firstAmout = 1200;
wallet.textContent = firstAmout;
let sellAmout = document.querySelector('.sellValue');

gamesCount = 0;

//Show items in case first
const showWindow = () => {
    document.querySelector('.newspaper').classList.toggle('activeWindow');
}
caseFirst.addEventListener("click", showWindow);
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.newspaper').classList.remove('activeWindow');
})


const openCaseBtn = document.querySelector(".openButton");


const openCaseFunction = () => {

    const randomItemArray = new Array();
    randomItemArray[0] = `Items/item1.png`;
    randomItemArray[1] = `Items/item2.png`;
    randomItemArray[2] = `Items/item3.png`;
    randomItemArray[3] = `Items/item4.png`;
    randomItemArray[4] = `Items/item5.png`;
    randomItemArray[5] = `Items/item6.png`;
    randomItemArray[6] = `Items/item7.png`;

    //Minus cost of case
    firstAmout -= 120;
    document.querySelector('.amout').textContent = firstAmout;

    //Random item
    let randomNumber = Math.floor(Math.random() * randomItemArray.length);
    const winItemPhoto = document.querySelector('.winItemPhoto');

    //Window with win item
    const winItemWindow = document.querySelector('.winItemWrap');
    winItemWindow.classList.add('activeWinItem');

    //Random item photo
    let imageTag = document.querySelector(".winItemPhoto img");
    imageTag.src = randomItemArray[randomNumber];




    //Prices of items
    let sellValue = document.querySelector('.sellValue');

    if (randomNumber === 0) {
        sellValue.textContent = 1200;
    } else if (randomNumber === 1) {
        sellValue.textContent = 600;
    } else if (randomNumber === 2) {
        sellValue.textContent = 1300;
    } else if (randomNumber === 3) {
        sellValue.textContent = 1900;
    } else if (randomNumber === 4) {
        sellValue.textContent = 5;
    } else if (randomNumber === 5) {
        sellValue.textContent = 15;
    } else {
        sellValue.textContent = 190;
    }

    if (firstAmout < 120) alert("You don't have enough money");

    let gameCout = document.querySelector('.gamesCount');
    gamesCount++;
    gameCout.textContent = gamesCount;

    let lastItemPhoto = document.querySelector(".latestItems img");
    lastItemPhoto.src = randomItemArray[randomNumber];

}

//Sell button
//Window with win item remove
const sellButtonFunction = () => {
    //Sell amout + your balance
    firstAmout += sellAmout.textContent * 1;
    const winItemWindow = document.querySelector('.winItemWrap');
    winItemWindow.classList.remove('activeWinItem');
}

const sellButton = document.querySelector('.sellButton');

openCaseBtn.addEventListener('click', openCaseFunction);
sellButton.addEventListener('click', sellButtonFunction);