// atividade – sistema de pagamentos
// criar uma classe base Pagamento
// criar subclasses PagamentoCartao, PagamentoPix e PagamentoBoleto
// cada classe sobrescreve o método processar()
// criar função pagar(pagamento) que recebe qualquer tipo de pagamento e executa processar()
// isso demonstra polimorfismo

class Pagamento {
  constructor(valor) {
    this.valor = valor; // guarda o valor do pagamento
  }

  processar() {
    // método base que será sobrescrito nas subclasses
    console.log("processando pagamento...");
  }
}

class PagamentoCartao extends Pagamento { // herda de Pagamento
  constructor(valor, numeroCartao) {
    super(valor); // chama o constructor da classe pai
    this.numeroCartao = numeroCartao; // guarda o numero do cartão
  }

  processar() {
    // sobrescrevendo o método processar para pagamento com cartão
    console.log(`pagamento de R$${this.valor} realizado com cartão final ${this.numeroCartao.slice(-4)}`);
  }
}

class PagamentoPix extends Pagamento { // herda de Pagamento
  constructor(valor, chavePix) {
    super(valor); // chama o constructor da classe pai
    this.chavePix = chavePix; // guarda a chave pix
  }

  processar() {
    // sobrescrevendo o método processar para pix
    console.log(`pagamento de R$${this.valor} realizado via pix para chave ${this.chavePix}`);
  }
}

class PagamentoBoleto extends Pagamento { // herda de Pagamento
  constructor(valor, codigoBoleto) {
    super(valor); // chama o constructor da classe pai
    this.codigoBoleto = codigoBoleto; // guarda o codigo do boleto
  }

  processar() {
    // sobrescrevendo o método processar para boleto
    console.log(`boleto gerado no valor de R$${this.valor}. código: ${this.codigoBoleto}`);
  }
}

// função que demonstra polimorfismo
// ela recebe qualquer objeto da hierarquia Pagamento
function pagar(pagamento) {
  pagamento.processar(); // chama o método processar do objeto recebido
}

// exemplo de uso
const pagamento1 = new PagamentoCartao(150, "1234567812345678");
const pagamento2 = new PagamentoPix(80, "larissa@email.com");
const pagamento3 = new PagamentoBoleto(200, "34191.79001 01043.510047 91020.150008 5 90270000020000");

pagar(pagamento1);
pagar(pagamento2);
pagar(pagamento3);