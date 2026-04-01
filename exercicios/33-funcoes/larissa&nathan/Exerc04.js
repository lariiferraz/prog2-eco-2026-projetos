// Função principal
function criarSaudacao(idioma) {
  return function (nome) {
    if (idioma === "pt") {
      console.log(`Olá, ${nome}!`);
    } else if (idioma === "en") {
      console.log(`Hello, ${nome}!`);
    } else if (idioma === "es") {
      console.log(`¡Hola, ${nome}!`);
    } else {
      console.log(`Idioma não suportado`);
    }
  };
}

// Testes
const saudarEmPortugues = criarSaudacao("pt");
const saudarEmIngles = criarSaudacao("en");
const saudarEmEspanhol = criarSaudacao("es");

saudarEmPortugues("Ana");  // Olá, Ana!
saudarEmIngles("Ana");     // Hello, Ana!
saudarEmEspanhol("Ana");   // ¡Hola, Ana!