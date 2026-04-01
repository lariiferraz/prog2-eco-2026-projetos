const produtos = [
  { nome: "Mouse", preco: 80, estoque: 5 },
  { nome: "Teclado", preco: 150, estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 2 },
  { nome: "Headset", preco: 200, estoque: 8 },
  { nome: "Webcam", preco: 120, estoque: 0 },
];

// 1. FILTER → produtos com estoque > 0
const disponiveis = produtos.filter(produto => produto.estoque > 0);
console.log("Disponíveis:", disponiveis);

// 2. MAP → aplicar 10% de desconto
const comDesconto = produtos.map(produto => {
  return {
    nome: produto.nome,
    preco: produto.preco * 0.9
  };
});
console.log("Com desconto:", comDesconto);

// 3. REDUCE → valor total do estoque
const valorTotal = produtos.reduce((total, produto) => {
  return total + (produto.preco * produto.estoque);
}, 0);
console.log("Valor total do estoque:", valorTotal);

// 4. DESAFIO → apenas produtos disponíveis (encadeado)
const totalDisponiveis = produtos
  .filter(produto => produto.estoque > 0)
  .reduce((total, produto) => total + (produto.preco * produto.estoque), 0);

console.log("Total dos produtos disponíveis:", totalDisponiveis);