class Cliente{
    constructor(Codigo_cliente, CPF, Email, Celular, Senha, Data_cadastro, Nome, Endereco){
        this.Codigo_cliente = Codigo_cliente;
        this.CPF = CPF;
        this.Email = Email;
        this.Celular = Celular;
        this.Senha = Senha;
        this.Data_cadastro = Data_cadastro;
        this.Nome = Nome;
        this.Endereco = Endereco;
    }
}

module.exports = Cliente;