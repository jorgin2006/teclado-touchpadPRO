const keyboard = document.getElementById('keyboard');

document.addEventListener('mousemove',(e)=>{

    const x =
    (window.innerWidth / 2 - e.clientX) / 25;

    const y =
    (window.innerHeight / 2 - e.clientY) / 25;

    keyboard.style.transform = `
    rotateY(${-x}deg)
    rotateX(${y}deg)
    `;

});

const keys = document.querySelectorAll('.key');
const display = document.getElementById('display');

let text = '';

keys.forEach((key)=>{

    key.addEventListener('click',()=>{

        const value = key.innerText;

        key.style.transform =
        'translateY(5px)';

        setTimeout(()=>{

            key.style.transform='';

        },100);

        if(value === 'DEL'){

            text = text.slice(0,-1);

        }

        else if(value === 'ESPAÇO'){

            text += ' ';

        }

        else{

            text += value;

        }

        display.value = text;

    });

});

/* teclado físico */

document.addEventListener('keydown',(e)=>{

    if(e.key === 'Backspace'){

        text = text.slice(0,-1);

    }

    else if(e.key === ' '){

        text += ' ';

    }

    else if(e.key.length === 1){

        text += e.key.toUpperCase();

    }

    display.value = text;

});