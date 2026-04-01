const estudantes = [
  { nome: "Ana", nota: 8, turma: "ECO" },
  { nome: "Bruno", nota: 5, turma: "ECO" },
  { nome: "Maria", nota: 7, turma: "ECO" },
  { nome: "Pedro", nota: 6, turma: "ECO" },
  { nome: "Lucas", nota: 9, turma: "ADM" },
  { nome: "Julia", nota: 4, turma: "ECO" },
];

// Encadeamento
const resultado = estudantes
  .filter(e => e.turma === "ECO")
  .filter(e => e.nota >= 6)
  .map(e => e.nome)
  .reduce((texto, nome, index, array) => {
    if (index === 0) {
      return `Aprovados da turma ECO: ${nome}`;
    }
    return texto + ", " + nome;
  }, "");

console.log(resultado);