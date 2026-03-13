// atividade 4 – biblioteca
// criar classes Livro e UsuarioBiblioteca
// usar encapsulamento para proteger a lista de livros emprestados
// impedir que o mesmo livro seja emprestado duas vezes para o mesmo usuario
// criar método para listar os empréstimos ativos

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo; // guarda o titulo do livro
    this.autor = autor; // guarda o autor
  }
}

class UsuarioBiblioteca {
  #livrosEmprestados; // atributo privado que guarda os livros emprestados

  constructor(nome) {
    this.nome = nome; // nome do usuario
    this.#livrosEmprestados = []; // inicializa um array vazio
  }

  emprestarLivro(livro) {
    // verifica se o livro ja foi emprestado para este usuario
    const jaEmprestado = this.#livrosEmprestados.some(
      l => l.titulo === livro.titulo
    );

    if (jaEmprestado) {
      console.log("este livro ja foi emprestado para este usuario");
      return;
    }

    this.#livrosEmprestados.push(livro); // adiciona o livro na lista
  }

  devolverLivro(titulo) {
    // remove o livro da lista de emprestados
    this.#livrosEmprestados = this.#livrosEmprestados.filter(
      livro => livro.titulo !== titulo
    );
  }

  listarEmprestimos() {
    // lista todos os livros emprestados
    return this.#livrosEmprestados.map(
      livro => `${livro.titulo} - ${livro.autor}`
    );
  }
}

// exemplo de uso
const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("1984", "George Orwell");

const usuario = new UsuarioBiblioteca("Larissa");

usuario.emprestarLivro(livro1);
usuario.emprestarLivro(livro2);
usuario.emprestarLivro(livro1); // tentativa de emprestar o mesmo livro novamente

console.log(usuario.listarEmprestimos());

usuario.devolverLivro("1984");

console.log(usuario.listarEmprestimos());