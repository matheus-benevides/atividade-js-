document.getElementById("paragrafo1").innerHTML = "Exercício 04";
document.getElementById("paragrafo2").innerHTML = document.title;
document.getElementById("imagem").innerHTML = "<img src='../_imagens/jslogo.png' alt='Imagem JS' onclick='msgImg()'>";
function msgImg() {
    alert('Imagem "logo" do JavaScript, está imagem tem fundo amarelo com JS escrito no canto inferior direito e está com a fonte preta');
    document.getElementById("textoDaImg").innerHTML='Imagem "logo" do JavaScript, está imagem tem fundo amarelo com JS escrito no canto inferior direito e está com a fonte preta';
}
document.getElementById("futuroBotao").innerHTML = "<button type='button' onclick='window.print()'>Imprimir</button>";
