// Função arrow com valor padrão
const apresentar = (nome, curso, semestre = 1) => {
  return `${nome} – ${curso} – ${semestre}º semestre`;
};

// Testes
console.log(apresentar("Lari", "Eng. Computação", 3));
console.log(apresentar("Nathan", "Eng. Computação"));