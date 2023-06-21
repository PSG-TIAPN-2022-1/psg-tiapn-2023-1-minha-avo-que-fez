class Pedido{
    constructor(Codigo_pedido, Data, Endereco_entrega, Preco_total){
        this.Codigo_pedido = Codigo_pedido;
        this.Data = Data;
        this.Endereco_entrega = Endereco_entrega;
        this.Preco_total = Preco_total;
    }
}

module.exports = Pedido;