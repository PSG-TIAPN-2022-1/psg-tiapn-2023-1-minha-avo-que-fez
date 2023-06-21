class Produtor{
    constructor(Codigo_produtor, CPF, Email, Celular, Senha, Data_cadastro, Nome_proprietario, Endereco, Tipo_conta, Nome_loja){
        this.Codigo_produtor = Codigo_produtor;
        this.CPF = CPF;
        this.Email = Email;
        this.Celular = Celular;
        this.Senha = Senha;
        this.Data_cadastro = Data_cadastro;
        this.Nome_proprietario = Nome_proprietario;
        this.Endereco = Endereco;
        this.Tipo_conta = Tipo_conta;
        this.Nome_loja = Nome_loja;
    }
}

module.exports = Produtor;