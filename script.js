let var_contador = localStorage.getItem("contador");
if (var_contador == null) {
  localStorage.setItem("contador", "1");
  var_contador = 1;
}
let contador = parseInt(var_contador);
let mensagem = document.getElementById("randommsg");
switch(contador) {
    case 1:
        mensagem.textContent = " Obrigado por ter aparecido assim do nada";
        break;
    case 2: 
        mensagem.textContent = " Eu nunca iria imaginar o que estava pra acontecer";
        break;
    case 3: 
        mensagem.textContent = " Que a minha alma gêmea realmente existia e eu só não a conhecia bem";
        break;
    case 4: 
        mensagem.textContent = " Só se foi um mês de uma vida toda pela frente...";
        break;
    case 5: 
        mensagem.textContent = " Ainda temos muito o que viver e isso me motiva dia após dia";
        break;
    case 6: 
        mensagem.textContent = " Eu vou sentir saudades de hoje assim como saudades de amanhã e depois";
        break;
    case 7: 
        mensagem.textContent = " Por que o tempo que eu passo contigo é assim.";
        break;
    case 8: 
        mensagem.textContent = " Te amo";
        break;
    case 9: 
        mensagem.textContent = " Te quero";
        break;
    case 10: 
        mensagem.textContent = " Te cuido.";
        break;
}
if(contador + 1 == 11) {
    localStorage.setItem("contador", "1");
}
else {
    localStorage.setItem("contador", `${contador + 1}`);
}

function quercasar() {
    let aaa = document.getElementById("resposta");
    aaa.textContent = "É bom mesmo ;)";
}