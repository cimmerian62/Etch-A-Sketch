const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) 
    for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('box'); 
   // div.textContent = "hello world";
    container.appendChild(div);
}



