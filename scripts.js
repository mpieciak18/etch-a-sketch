let etchGrid = document.getElementById('etch-grid');
let etchBoxes = document.getElementsByClassName('etch-box');

function resizeGrid(userInput) {
    userInput = Number(userInput);
    for (y = 0; y < userInput; y++) {
        let newEtchRow = document.createElement('div');
        newEtchRow.setAttribute('class', 'etch-row');
        etchGrid.appendChild(newEtchRow);
        for (x = 0; x < userInput; x++) {
            let newEtchBox = document.createElement('div');
            newEtchBox.setAttribute('class', 'etch-box');
            let thisEtchRow = etchGrid.lastChild;
            thisEtchRow.appendChild(newEtchBox);
        };
    };
    resizeBox(userInput);
    chooseTouchOrHover();
};
function resizeBox(userInput) {
    let gridHeight = Number(getComputedStyle(etchGrid).height.slice(0, -2));
    let boxHeight = (gridHeight / userInput);
    boxHeight = boxHeight.toString() + 'px';
    for (i = 0; i < etchBoxes.length; i++) {
        etchBoxes[i].setAttribute('style', 'height: ' + boxHeight + '; width: ' + boxHeight + ';');
    };
};
function chooseTouchOrHover() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        for (i = 0; i < etchBoxes.length; i++) {
            etchBoxes[i].addEventListener('touchstart', colorBox);
        };
        etchGrid.setAttribute('style', 'height: 300px; width: 300px;');
    } else {
        for (i = 0; i < etchBoxes.length; i++) {
            etchBoxes[i].addEventListener('mouseover', colorBox);
        };
        etchGrid.setAttribute('style', 'height: 480px; width: 480px;');
    };
};
function colorBox(event) {
    let selectedBox = event.target;
    let randomRgbValues = selectRandomRgb();
    let randomColor = 'rgb(' + randomRgbValues + ')';
    selectedBox.style.backgroundColor = randomColor;
};
function selectRandomRgb() {
    let rgbOne = selectRandomNum().toString() + ', ';
    let rgbTwo = selectRandomNum().toString() + ', ';
    let rgbThree = selectRandomNum().toString();
    return rgbOne + rgbTwo + rgbThree;
};
function selectRandomNum() {
    return Math.floor(Math.random() * 255) + 1;
};

let resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', resetGrid);

function resetGrid() {
    let userInput = prompt('Resetting the grid.\n\nHow many rows & columns do you want?\n\n');
    if (Number.isNaN(Number(userInput))) {
        alert('You cannot a non-number value!\n\nTry again.\n\n');
        resetGrid();
    }
    else if (Number(userInput) > 200) {
        alert('You cannot select a value greater than 200!\n\nTry again.\n\n');
        resetGrid();
    }
    else {
        while (etchGrid.firstChild != null) {
            etchGrid.removeChild(etchGrid.firstChild)
        };
        resizeGrid(userInput);
    };
};
chooseTouchOrHover();
resizeGrid(16);