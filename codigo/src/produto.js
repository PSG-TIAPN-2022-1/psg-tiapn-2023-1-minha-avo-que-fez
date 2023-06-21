class Produto{
    constructor(Codigo_produto, Nome, Preco, Categoria, Descricao, Prazo_min, produtor){
        this.Codigo_produto = Codigo_produto;
        this.Nome = Nome;
        this.Preco = Preco;
        this.Categoria = Categoria;
        this.Descricao = Descricao;
        this.Prazo_min = Prazo_min;
        this.produtor = produtor;
    }
}

module.exports = Produto;