// Modele as seguintes classes:
// curso: possui nome e carga horaria
// turma: está ligada a um curso e contem uma lista de estudantes (Estudante).
// Não permitir estudantes duplicados na turma. Garantir que toda turma esteja ligada a um curso válido.

// Implementado a classe Curso e seus atributos (nome do curso e sua carga horária)
// a classe é um molde, ela diz "todo objeto do tipo curso terá: nome e cargahoraria", objeto é algo criado a partir de uma classe.
class Curso {
  constructor(nome, cargahoraria) { // o constructor serve para inicializar o objeto, ele recebe os valores e coloca eles nos atributos do objeto
    this.nome = nome; // this significa "este objeto que está sendo criado"
    this.cargahoraria = cargahoraria;
  }
}

// Implementando a classe Estudante e seus atributos (nome e matrícula)
class Estudantes {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
  }
}

// Implementando a classe Turma e seus atributos (curso e estudantes)
class Turma {
  constructor(curso) {
    if (!curso) { // validação do curso - !curso significa se curso é vazio
      throw new Error("A turma precisa estar ligada a um curso. "); // se não existir curso, parar o programa.
    }
    this.curso = curso;
    this.estudantes = []; // array vazio, vai guardar os estudantes
  }

  // Criação do método que recebe o parâmetro estudante
  addEstudante(estudante) {
    const existe = this.estudantes.some( // verificação se ja existe matricula, criação de uma variavel "existe" que irá guardar True ou False 
      (e) => e.matricula === estudante.matricula // some() verifica uma array a partir de uma condição e arrow function que faz a comparação, 
    );

    if (existe) {
      console.log("Já há estudante na turma com esta matrícula");
      return;
    }
    this.estudantes.push(estudante); // se não tiver duplicação, chegamos aqui e o push faz adicionar o elemento no array estudante
  }
}

// Exemplo

const curso = new Curso("Engenharia de Comuptação", 3600); // curso e carga horaria

const turma = new Turma(curso);
const e1 = new Estudantes("Ana", "001"); // e1 é estudante1
const e2 = new Estudantes("Carlos", "002");
const e3 = new Estudantes("Paulo", "001"); // matrícula duplcada 

// chamar o método addEstudante do objeto turma e passar e1,e2 e e3 como argumento.
turma.addEstudante(e1);
turma.addEstudante(e2);
turma.addEstudante(e3);

console.log(turma.estudantes);