/*Para comecar escolha o personagem */
function iniciaJogoEder() {
    var confirmarEder = confirm(`${nome} \n\n Deseja escolhe-la? Aperte OK se sim e Cancelar se não.`);
    if(iniciarOgame == false){
        alert('Você encerrou o jogo !');
    }else{
        PrimeiraFase();
    }
}

function iniciaJogoJoyce() {
    var confirmarJoyce = confirm(`${nome} \n\n Deseja escolhe-la? Aperte OK se sim e Cancelar se não.`);
    if(iniciarOgame == false){
        alert('Você encerrou o jogo !');
    }else{
        PrimeiraFase();
    }
}

function iniciaJogoJessica() {
    var confirmarJessica = confirm(`${nome} \n\n Deseja escolhe-la? Aperte OK se sim e Cancelar se não.`);
    if(iniciarOgame == false){
        alert('Você encerrou o jogo !');
    }else{
        PrimeiraFase();
    }
}
/* Fim de Jogo */
function gameOver(){
    var jogarDeNovo = confirm('Game Over, quer jogar de novo ?');
    if(jogarDeNovo){
        PrimeiraFase();
    }else{
        alert('Você encerrou o jogo.');
    }
}

function PrimeiraFase() {
    alert('É um domingo de sol você está em casa e tem trabalho do curso para realizar. Seu amigos te chamaram para ir para praia e você precisa decidir: Continuar em casa | Sair de Casa')
    var respostaUm = prompt('Digite 0 para Ficar em casa | Digite 1 para Sair de casa');
    if (validarEscolhaUsuario(respostaUm) == false){
        PrimeiraFase();
    }
    if(respostaUm == 1){
        sairDeCasa();
    }else if(respostaUm == 0) {
        ficaEmCasa();
    }
}

function sairDeCasa(){
    var respostaDois = prompt(`Você decidiu ir praia e deixar para fazer o trabalho mais tarde, decida como você vai: \n\n Digite 0 para Ir de onibus |Digite 1 para Ir de carro`);
    if (validarEscolhaUsuario(respostaDois) == false){
        sairDeCasa();
    }
    if(respostaDois ==1){       
        sairDeCarro();
    }else if(respostaDois ==0) {
        sairDeOnibus();
    }
}

function sairDeCarro(){
    var respostaTres = prompt(`Você decidiu ir de carro, agora deve decidir: Não beber e voltar um pouco mais cedo ou Beber com seus amigos. \n\n Digite 0 para naoBeber | Digite 1 para beber`);
    if (validarEscolhaUsuario(respostaTres) == false){
        sairDeCarro();
    }
    if(respostaTres == 0){       
        naoBeber();
    }else if(respostaTres == 1){
        beber();
    }
}

function naoBeber(){
    var respostaQuatro = prompt(`Você decidiu não beber e voltar mais cedo para casa, mas esta cansado da praia agora deve decidir: \n\n Digite 0 para fazer o trabalho | Digite 1 para não fazer o Trabalho`)
    if (validarEscolhaUsuario(respostaQuatro) == false){
        naoBeber();
    }
    if(respostaQuatro == 0){       
        fazerTrabalho();
    }else if(respostaQuatro == 1){
        naoFazerTrabalho();
    }

}

function beber(){
    alert('Você foi parado em uma blitz e preso!');
    gameOver();
}

function sairDeOnibus(){
    var respostaCinco = prompt(`Você decidiu ir de onibus e se divertiu bastante, agora deve decidir: Voltar um pouco mais cedo e fazer o trabalho ou ficar até mais tarde com seus amigos. \n\n Digite 0 para Voltar | Digite 1 para Ficar até tarde e não fazer o trabalho`);
    if (validarEscolhaUsuario(respostaCinco) == false){
        sairDeOnibus();
    }
    if(respostaCinco == 0){       
        voltar();
    }
    else if(respostaCinco == 1){
        naoFazerTrabalho();
    }
}

function voltar(){
   var respostaSeis = prompt(`Você decidiu voltar mais cedo mas esta cansado da praia agora deve decidir:\n\n Digite 0 para fazer o trabalho | Digite 1 para naoFazerTrabalho`)
   if (validarEscolhaUsuario(respostaSeis) == false){
        voltar();
   }
   if (respostaSeis == 0){
       fazerTrabalho();
    }
   else if (respostaSeis ==1){
       naoFazerTrabalho();
   }
   
}

function naoFazerTrabalho(){
    alert('Você não entregou o trabalho no seu curso e repetiu de ano!');
    gameOver();
}

function fazerTrabalho(){
    alert('Você se divertiu e entregou o seu trabalho Parabéns você venceu!')
    gameOver();
}

function ficaEmCasa(){
    var respostaSete = prompt('Você decidiu ficar em casa, agora deve decidir: \n\n Digite 0 para Chamar os amigos para uma festinha em casa | Digite 1 para Ver um filme sozinho');
    if(validarEscolhaUsuario(respostaSete) == false){
        ficaEmCasa();
    }
    if(respostaSete == 0){
        festinha();
    }else if(respostaSete ==1){
        filme();
    }
}


function filme(){
    var respostaOito = prompt('Você decidiu ver um filme, mas ficou com sono. \n\n Digite 0 para dormir | Digite 1 para fazerTrabalho');
    if(validarEscolhaUsuario(respostaOito) == false){
        filme();
    }
    if(respostaOito == 0){
        dormir();
    }    
    else if(respostaOito == 1){
        fazerTrabalho();
    }
}    

function dormir(){
    alert('Você não entregou o trabalho no seu curso e repetiu de ano!');
    gameOver();
}

function festinha(){
    var respostaNove = prompt('Você decidiu fazer uma festinha, bebeu muito e não esta muito bem. \n\n Digite 0 para dormir |Digite 1 para fazerTrabalho')
    if(validarEscolhaUsuario(respostaNove) == false){
        festinha();
    }
    if(respostaNove == 0){
        dormir();
    }
    else if(respostaNove == 1){
        fazerTrabalho();
    }
}


function validarEscolhaUsuario(escolha) {
    if (escolha == 0 || escolha == 1 || escolha == null){
        return true
    }

    alert("Você deve escolher 0 ou 1")
    return false
}
