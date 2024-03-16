const robotron = document.querySelector('#robot');
const estatistica = document.querySelectorAll("[data-estatistica]");
const img = document.querySelector('img');
const skins = [
        {
                caminho: 'img/robotron.png'
        },
        {
                caminho: 'img/Robotron 2000 - Amarelo.png'
        },
        {
                caminho: 'img/Robotron 2000 - Branco.png'
        },
        {
                caminho: 'img/Robotron 2000 - Preto.png'
        },
        {
                caminho: 'img/Robotron 2000 - Rosa.png'
        },
        {
                caminho: 'img/Robotron 2000 - Vermelho.png'
        }
];

let indiceAtual = 0;



const pecas = {
        "bracos":{
                "forca": 29,
                "poder": 35,
                "energia": -21,
                "velocidade": -5
        },
        "bracosneg": {
                "forca": -29,
                "poder": -35,
                "energia": 21,
                "velocidade": 5
        },

        "blindagem":{
                "forca": 41,
                "poder": 20,
                "energia": 0,
                "velocidade": -20
        },
        "blindagemneg":{
                "forca": -41,
                "poder": -20,
                "energia": 0,
                "velocidade": 20
        },

        "nucleos":{
                "forca": 0,
                "poder": 7,
                "energia": 48,
                "velocidade": -4 
        },
        "nucleosneg":{
                "forca": 0,
                "poder": -7,
                "energia": -48,
                "velocidade": 4 
        },

        "pernas": {
                "forca": 27,
                "poder": 21,
                "energia": -32,
                "velocidade": 43  
        },
        "pernasneg": {
                "forca": -27,
                "poder": -21,
                "energia": 32,
                "velocidade": -43  
        },
        
        "foguete": {
                "forca": 0,
                "poder": 28,
                "energia": 0,
                "velocidade": -2  
        },
        "fogueteneg": {
                "forca": 0,
                "poder": -28,
                "energia": 0,
                "velocidade": +2  
        }
}
const controle = document.querySelectorAll('[data-controle]')

controle.forEach((elemento) =>{
        elemento.addEventListener("click", (evento)=>{
                manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
                atualizaEstatisticas(evento.target.dataset.peca);
        })
})

function manipulaDados(operacao, controle){

        const peca = controle.querySelector('[data-contador]');

        if(operacao === "-"){
                peca.value = parseInt(peca.value) - 1
                if(peca.value < 0){
                peca.value = 0;
                }
        }
        else{
                peca.value = parseInt(peca.value) + 1
        }
}



function atualizaEstatisticas(peca){
        estatistica.forEach( (elemento)=>{
                elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
}

document.addEventListener("click", imagemAnterior());
document.addEventListener("click", proximaImagem());


function dizOi(){
        alert("olá humano, qual seu nome?");
        nome = prompt();
        alert(nome + ", vamos salvar o mundo da invasão alienígena!");
        
}

function mudaCor() {
        const imagemAtual = skins[indiceAtual];
        const img = document.createElement('img');
        img.src = imagemAtual.caminho;
        document.getElementById('imagem').innerHTML = '';
        document.getElementById('imagem').appendChild(img);
}

function imagemAnterior() {
        indiceAtual = (indiceAtual === 0) ? skins.length - 1 : indiceAtual - 1;
        mudaCor();
}

function proximaImagem() {
        indiceAtual = (indiceAtual === skins.length - 1) ? 0 : indiceAtual + 1;
        mudaCor();
}