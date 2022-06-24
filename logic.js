const container = document.querySelector('.container');
const btn = document.querySelector('#btn');

function changeSize(num) {
    removeAllChildNodes();
    container.style['grid-template-rows'] = `repeat(${num}, 1fr)`; 
    container.style['grid-template-columns'] = `repeat(${num}, 1fr)`;
    addDivs(num);
}


function addDivs(num) {
    for (let i = 0; i < num; i++) 
        for (let i = 0; i < num; i++) {
            const div = document.createElement('div');
            div.addEventListener("mouseover", function( event ) {
                    event.target.style.backgroundColor = 'black';
                }
            );
            div.classList.add('box'); 
            container.appendChild(div);
            console.log("yes");
        }
}

function removeAllChildNodes() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

btn.addEventListener('click', () => {
    let num = prompt("Enter a number between 10 and 100:")
    if (num >= 10 && num <= 100) {
        changeSize(num);

    }
    else{
        alert("Error, incorrect size");
    }
});

changeSize(16);
