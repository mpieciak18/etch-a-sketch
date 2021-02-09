let etchBoxes = document.getElementsByClassName('etch-box');

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    for (i = 0; i < etchBoxes.length; i++) {
        etchBoxes[i].addEventListener('touchmove', darkenBox);
    };
} else {
    for (i = 0; i < etchBoxes.length; i++) {
        etchBoxes[i].addEventListener('mouseover', darkenBox);
    };
};
  
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