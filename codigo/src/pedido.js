class Pedido{
    constructor(Codigo_pedido, Data, Endereco_entrega, Preco_total, Cliente, Produtor){
        this.Codigo_pedido = Codigo_pedido;
        this.Data = Data;
        this.Endereco_entrega = Endereco_entrega;
        this.Preco_total = Preco_total;
        this.Cliente = Cliente;
        this.Produtor = Produtor;
    }
}

module.exports = Pedido;