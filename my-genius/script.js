let order = [];
let clickedOrder = [];
let score = 0;
let counter = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const modal = document.querySelector('.modal');
const modal_header = document.querySelector('.modal_header');
const modal_title = document.querySelector('.modal_title');
const modal_body = document.querySelector('.modal_body');
const modal_message = document.querySelector('.modal_message');
const modal_btn = document.querySelector('.modal_btn');
const close_modal_btn = document.querySelector('.close_modal_btn');

//Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order.push(colorOrder);
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
let lightColor = (el, num) => {
    num = num * 500;
    setTimeout(() => {
        el.classList.add('selected');
    }, num - 250); 

    setTimeout(() => {
        el.classList.remove('selected');
    }, num);
}

//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            return;
        }
    }

    if(clickedOrder.length == order.length) {
        score++;
        const title = 'Você acertou!'
        const message = `Pontuação <br/><span>${score}</span>`;
        const btn_text = 'Próximo nível'
    
        showModal(title, message, btn_text, nextLevel);
    }
}

//Função para o clique do usuário
let click = (color) => {
   clickedOrder.push(color);
   createColorElement(color).classList.add('selected');

   setTimeout(() => {
       createColorElement(color).classList.remove('selected');
   })

   checkOrder();
}

//Função que retorna uma cor
let createColorElement = (color) => {
    switch (color) {
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
        default:
            console.error('Invalid color.')
    }
}

//Função para próximo nível
let nextLevel = () => {
    closeModal();
    shuffleOrder();
}

//Função para game over
let gameOver = () => {
    order = [];
    clickedOrder = [];

    const title = 'Game over';
    const message = `Pontuação <br/><span>${score}</span>`;
    const btn_text = 'Novo Jogo';

    showModal(title, message, btn_text, newGame);
}

//Função para iniciar um novo jogo
let newGame = () => {
    score = 0;

    const title = 'Novo jogo';
    const message = '';
    const btn_text = 'Iniciar';

    showModal(title, message, btn_text, nextLevel);
}

//Função de boas-vindas
let welcome = () =>  {
    const title = 'Bem-vindo ao My Genius!';
    const message = '';
    const btn_text = 'Jogar';

    showModal(title, message, btn_text, nextLevel);
}

green.onclick = () => click(0);
red.onclick = () =>  click(1);
yellow.onclick = () =>  click(2);
blue.onclick = () =>  click(3);

//Função para fechar modal
let closeModal = () => {
    modal.style.display = 'none';
}

//Função para mostrar modal de novo jogo
let showModal = (title, message, btn_text, fn) => {
    modal.style.display = 'flex';
    setModalStyle();
    setModalData(title, message, btn_text, fn);
}

//Função para adicionar estilo ao modal
let setModalStyle = () => {
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
}

//Função para adicionar conetúdo dinâmico ao modal
let setModalData = (title, message, btn_text, fn) => {
    modal_title.innerHTML = title;
    modal_message.innerHTML = message;
    modal_btn.innerHTML = btn_text;
    modal_btn.onclick = fn;        
}

welcome();

