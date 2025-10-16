let listaNumSorteados = [];
let numLimite = 10;
let numFinal = gerarNumAleatorio();
let tentativas = 1;


function textoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.2});
}

function msgInicial (){
    textoTela('h1','Jogo do número secreto!');
    textoTela('p','Escolha um número entre 1 e 10');
}

function reiniciarJogo(){
    console.log('o jogo foi reiniciado!');
    
}

function gerarNumAleatorio() {
    let numSorteado = parseInt(Math.random () * numLimite + 1);
    let quantidadeElementosList = listaNumSorteados.length;
if (quantidadeElementosList==numLimite) {
    listaNumSorteados= [];
    
}

    if (listaNumSorteados.includes(numSorteado)) {
        return gerarNumAleatorio();
    }else{
        listaNumSorteados.push(numSorteado);
        return numSorteado;
    }
}

msgInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute== numFinal) {
            textoTela('h1','Parabéns!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
            textoTela('p', msgTentativas);
            console.log('você acertou o chute');
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            if(chute > numFinal){
                textoTela('p', 'O número secreto é menor!');
            }else{ 
                textoTela('p', 'O número secreto é maior!');
            }
            console.log('você errou o chute');
        }
    tentativas++;
    console.log('o botão foi clicado!');
    limparCampo();
}

function limparCampo(){
    chute =document.querySelector('input');
    chute.value='';
    
}

function reiniciarJogo(){
    msgInicial();
    numFinal = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
