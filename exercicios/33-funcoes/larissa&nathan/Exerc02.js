// Função principal
function processarIdade(idade, callback) {
  if (idade < 0 || idade > 120) {
    throw new Error("Idade inválida!");
  }

  callback(idade);
}

// Callback 1: verifica maioridade
function verificarMaioridade(idade) {
  if (idade >= 18) {
    console.log("É maior de idade");
  } else {
    console.log("É menor de idade");
  }
}

// Callback 2: calcula ano de nascimento
function calcularNascimento(idade) {
  const anoAtual = new Date().getFullYear();
  const anoNascimento = anoAtual - idade;
  console.log(`Ano de nascimento aproximado: ${anoNascimento}`);
}

// Testes
try {
  processarIdade(20, verificarMaioridade);
  processarIdade(15, verificarMaioridade);

  processarIdade(25, calcularNascimento);

  processarIdade(-5, verificarMaioridade); // vai dar erro
} catch (erro) {
  console.log(erro.message);
}