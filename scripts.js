let etchBoxes = document.getElementsByClassName('etch-box');

for (i = 0; i < etchBoxes.length; i++) {
    etchBoxes[i].addEventListener('mouseover', darkenBox);
};

function darkenBox(event) {
    let selectedBox = event.target;
    selectedBox.setAttribute('style', 'background-color: grey;');
}

let resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', resetGrid);

function resetGrid(event) {
    for (i = 0; i < etchBoxes.length; i++) {
        etchBoxes[i].setAttribute('style', 'background-color: white;');
    };
}