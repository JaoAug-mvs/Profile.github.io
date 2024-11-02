function exibirMensagem() {
    alert("Buu, Eu te Assustei não é?");
}
let angulo = 0; // Variável para armazenar o ângulo atual

function girarImagem() {
    angulo += 180; 
    document.getElementById("Image03").style.transform = `rotate(${angulo}deg)`;
    
}
function mostrarDataHora() {
    const agora = new Date();
    document.getElementById("dataHora").innerText = agora.toLocaleString();
}