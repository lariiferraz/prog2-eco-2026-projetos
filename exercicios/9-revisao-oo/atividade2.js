// Implemente uma classe CarrinhoDeCompras com:
// Lista interna de itens (cada item com descrição, preço, quantidade).
// Métodos: adicionarItem, removerItem, calcularTotal, listarItens.
// Regras: Não aceitar quantidade zero ou negativa. Esconder a lista interna (encapsulamento) e expor apenas métodos de acesso

class CarrinhoDeCompras {
  #itens; // atributo privado - pode ser acessado apenas dentro da classe - é uma forma de encapsulamento
  constructor() {
    this.#itens = []; // inicializa um array vazio , que armazenará os itens do carrinho
  }

  adicionarItem(descricao, preco, quantidade) {
    if (quantidade <= 0) {
      console.log("Quantidade Inválida")
      return;
    }
    const item = { // criamos um objeto representando o item
      descricao: descricao,
      preco: preco,
      quantidade: quantidade,
    };
    this.#itens.push(item); // adiciona um elemento no final do array  
  }

  removerItem(descricao) { // esse método vai servir para remover um item pela descrição
    this.#itens = this.#itens.filter(item => item.descricao !== descricao); // o filter() cria um novo array contendo apenas os elementos que passam na condição
  }

  CalcularTotal() {
    let total = 0; // a variavel total armazenará a soma do carrinho
    for (const item of this.#itens) { // for...of percorre cada item dentro do array
      total += item.preco * item.quantidade; // preço x quantidade
    }
    return total; // valor total da compra
  }
  listarItens() {
    return this.#itens.map(item => `${item.descricao} - R$${item.preco} x ${item.quantidade}`); // map percorre o array e transforma cada objeto em uma string formatada
  }
}

// exemplo de uso
const carrinho = new CarrinhoDeCompras();

carrinho.adicionarItem("Camisa", 50, 2);
carrinho.adicionarItem("Calça", 120, 1);

console.log(carrinho.listarItens());
console.log("Total:", carrinho.CalcularTotal());


