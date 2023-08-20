const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');

equalBtn.addEventListener('click', (event) => {
    try {
        display.textContent = eval(display.textContent);
        event.stopImmediatePropagation();
    }
    catch {
        display.textContent = '0'; //Reset display if an error occurs when evaluating the expressions in display
        event.stopImmediatePropagation();
    }
})

clearBtn.addEventListener('click', (event) => {
    display.textContent = '0';
    event.stopImmediatePropagation();
})

for (let button of buttons ) {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = button.textContent;
        }
        else {
            display.textContent += button.textContent;
        }  
    })
}