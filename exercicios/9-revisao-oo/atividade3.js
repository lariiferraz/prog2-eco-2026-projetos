// atividade 3 – herança e polimorfismo com veículos
// criar uma classe Veiculo com marca, modelo e ano
// criar um método descricao()
// criar subclasses Carro e Moto que herdam de Veiculo e sobrescrevem descricao()
// criar uma função imprimirDescricao(veiculo) que recebe qualquer veiculo e chama descricao()

class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca; // guarda a marca do veículo
    this.modelo = modelo; // guarda o modelo
    this.ano = ano; // guarda o ano
  }

  descricao() {
    // retorna uma descrição básica do veículo
    return `${this.marca} ${this.modelo} (${this.ano})`;
  }
}

class Carro extends Veiculo { // carro herda de Veiculo
  constructor(marca, modelo, ano) {
    super(marca, modelo, ano); // chama o constructor da classe pai
  }

  descricao() {
    // sobrescrevendo o método descricao da classe pai
    return `carro: ${this.marca} ${this.modelo} (${this.ano})`;
  }
}

class Moto extends Veiculo { // moto também herda de Veiculo
  constructor(marca, modelo, ano) {
    super(marca, modelo, ano); // chama o constructor da classe pai
  }

  descricao() {
    // sobrescrevendo o método descricao
    return `moto: ${this.marca} ${this.modelo} (${this.ano})`;
  }
}

// função que demonstra polimorfismo
// ela recebe qualquer objeto que seja Veiculo ou uma subclasse
function imprimirDescricao(veiculo) {
  console.log(veiculo.descricao()); // chama o método descricao do objeto recebido
}

// exemplo de uso
const carro1 = new Carro("Toyota", "Corolla", 2022);
const moto1 = new Moto("Honda", "CB500", 2021);

// a mesma função funciona para objetos diferentes
imprimirDescricao(carro1);
imprimirDescricao(moto1);