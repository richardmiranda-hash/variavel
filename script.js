function armazenarValor() {
  var userInput = document.getElementById("userInput").value;

  console.log("Olá, obrigado por abertar o botão, " + userInput);

  document.getElementById("valorInserido").innerText =
    "Olá, obrigado por apertar o botão, " + userInput;
}
