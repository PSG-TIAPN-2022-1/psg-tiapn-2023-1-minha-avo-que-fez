var config = require('./dbconfig');
const sql = require('mssql');

async function getprodutos(){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request().query("SELECT * from [dbo].[Produtos]");
        return TemperodeCasa.recordsets;
    }
    catch (erro){
        console.log(erro);
    }
}
async function getclientes(){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request().query("SELECT * from [dbo].[Clientes]");
        return TemperodeCasa.recordsets;
    }
    catch (erro){
        console.log(erro);
    }
}
async function getprodutores(){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request().query("SELECT * from [dbo].[Produtores]");
        return TemperodeCasa.recordsets;
    }
    catch (erro){
        console.log(erro);
    }
}
async function getpedidos(){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request().query("SELECT * from [dbo].[Pedidos]");
        return TemperodeCasa.recordsets;
    }
    catch (erro){
        console.log(erro);
    }
}

async function deleteproduto(produtoCodigo_produto){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, produtoCodigo_produto)
        .query("DELETE from [dbo].[Produtos] where Codigo_produto = @input_parameter");
        return TemperodeCasa.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function deletepedido(pedidoCodigo_pedido){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, pedidoCodigo_pedido)
        .query("DELETE from [dbo].[Pedidos] where Codigo_pedido = @input_parameter");
        return TemperodeCasa.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function deletecliente(clienteCodigo_cliente){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, clienteCodigo_cliente)
        .query("DELETE from [dbo].[Clientes] where Codigo_cliente = @input_parameter");
        return TemperodeCasa.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function deleteprodutor(produtorCodigo_produtor){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, produtorCodigo_produtor)
        .query("DELETE from [dbo].[Produtores] where Codigo_produtor = @input_parameter");
        return TemperodeCasa.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


async function getproduto(produtoCodigo_produto){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, produtoCodigo_produto)
        .query("SELECT * from [dbo].[Produtos] where Codigo_produto = @input_parameter");
        return TemperodeCasa.recordsets;
    }
    catch (erro){
        console.log(erro);
    }
}
async function getcliente(clienteCodigo_cliente){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, clienteCodigo_cliente)
        .query("SELECT * from [dbo].[Clientes] where Codigo_cliente = @input_parameter");
        return TemperodeCasa.recordsets;
    }
    catch (erro){
        console.log(erro);
    }
}
async function getprodutor(produtorCodigo_produtor){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, produtorCodigo_produtor)
        .query("SELECT * from [dbo].[Produtores] where Codigo_produtor = @input_parameter");
        return TemperodeCasa.recordsets;
    }
    catch (erro){
        console.log(erro);
    }
}
async function getpedido(pedidoCodigo_pedido){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, pedidoCodigo_pedido)
        .query("SELECT * from [dbo].[Pedidos] where Codigo_pedido = @input_parameter");
        return TemperodeCasa.recordsets;
    }
    catch (erro){
        console.log(erro);
    }
}

async function updtProduto(produto){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, produto.Codigo_produto)
        .query(`UPDATE [dbo].[Produtos]
                SET 
                [Nome] = '${produto.Nome}'
                ,[Preco] = '${produto.Preco}'
                ,[Categoria] = '${produto.Categoria}'
                ,[Descricao] = '${produto.Descricao}'
                ,[Prazo_min] = '${produto.Prazo_min}'
                ,[produtor] = '${produto.produtor}'
                WHERE Codigo_produto = @input_parameter`);
        return TemperodeCasa.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function updtCliente(cliente){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, cliente.Codigo_cliente)
        .query(`UPDATE [dbo].[Clientes]
                SET 
                [Emai] = '${cliente.Email}'
                ,[Celular] = '${cliente.Celular}'
                ,[Senha] = '${cliente.Senha}'
                ,[Data_cadastro] = '${cliente.Data_cadastro}'
                ,[Nome] = '${cliente.Nome}'
                ,[Endereco] = '${cliente.Endereco}'
                ,[Tipo_conta] = '${cliente.Tipo_conta}'
                ,[CPF] = '${cliente.CPF}'
                WHERE Codigo_cliente = @input_parameter`);
        return TemperodeCasa.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function updtProdutor(produtor){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, produtor.Codigo_produtor)
        .query(`UPDATE [dbo].[Produtores]
                SET 
                [Nome_loja] = '${produtor.Nome_loja}'
                ,[Email] = '${produtor.Email}'
                ,[Celular] = '${produtor.Celular}'
                ,[Senha] = '${produtor.Senha}'
                ,[Data_cadastro] = '${produtor.Data_cadastro}'
                ,[Nome_proprietario] = '${produtor.Nome_proprietario}'
                ,[Tipo_conta] = '${produtor.Tipo_conta}'
                ,[Endereco] = '${produtor.Endereco}'
                ,[CPF] = '${produtor.CPF}'
                WHERE Codigo_produtor = @input_parameter`);
        return TemperodeCasa.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function updtPedido(pedido){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .input('input_parameter', sql.Int, pedido.Codigo_pedido)
        .query(`UPDATE [dbo].[Pedidos]
                SET 
                [Preco_total] = '${pedido.Preco_total}'
                ,[Data] = '${pedido.Data}'
                ,[Endereco_entrega] = '${pedido.Endereco_entrega}'
                WHERE Codigo_pedido = @input_parameter`);
        return TemperodeCasa.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function addproduto(produto){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .query(`INSERT INTO [dbo].[Produtos](
                [Codigo_produto]
                ,[Nome]
                ,[Preco]
                ,[Categoria]
                ,[Descricao]
                ,[Prazo_min]
                ,[produtor]
            ) VALUES (
                '${produto.Codigo_produto}',
                '${produto.Nome}',
                '${produto.Preco}',
                '${produto.Categoria}',
                '${produto.Descricao}',
                '${produto.Prazo_min}',
                '${produto.produtor}'

            )
        `);
        return TemperodeCasa.recordsets;
    }
    catch (error){
        console.log(error);
    }
}
async function addcliente(cliente){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .query(`INSERT INTO [dbo].[Clientes](
                [Codigo_cliente]
                ,[CPF]
                ,[Email]
                ,[Celular]
                ,[Senha]
                ,[Data_cadastro]
                ,[Nome]
                ,[Endereco]
                ,[Tipo_conta]
            ) VALUES (
                '${cliente.Codigo_cliente}',
                '${cliente.CPF}',
                '${cliente.Email}',
                '${cliente.Celular}',
                '${cliente.Senha}',
                '${cliente.Data_cadastro}',
                '${cliente.Nome}',
                '${cliente.Endereco}',
                '${cliente.Tipo_conta}'

            )
        `);
        return TemperodeCasa.recordsets;
    }
    catch (error){
        console.log(error);
    }
}
async function addprodutor(produtor){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .query(`INSERT INTO [dbo].[Produtores](
                [Codigo_produtor]
                ,[CPF]
                ,[Email]
                ,[Celular]
                ,[Senha]
                ,[Data_cadastro]
                ,[Nome_proprietario]
                ,[Endereco]
                ,[Tipo_conta]
                ,[Nome_loja]
            ) VALUES (
                '${produtor.Codigo_produtor}',
                '${produtor.CPF}',
                '${produtor.Email}',
                '${produtor.Celular}',
                '${produtor.Senha}',
                '${produtor.Data_cadastro}',
                '${produtor.Nome_proprietario}',
                '${produtor.Endereco}',
                '${produtor.Tipo_conta}'
                '${produtor.Nome_loja}'

            )
        `);
        return TemperodeCasa.recordsets;
    }
    catch (error){
        console.log(error);
    }
}
async function addpedido(pedido){
    try{
        let pool = await sql.connect(config);
        let TemperodeCasa = await pool.request()
        .query(`INSERT INTO [dbo].[Pedidos](
                [Codigo_pedido]
                ,[Data]
                ,[Endereco_entrega]
                ,[Preco_total]
            ) VALUES (
                '${pedido.Codigo_pedido}',
                '${pedido.Data}',
                '${pedido.Endereco_entrega}',
                '${pedido.Preco_total}'

            )
        `);
        return TemperodeCasa.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

module.exports = {
    getprodutos : getprodutos,
    getproduto : getproduto,
    addproduto : addproduto,
    deleteproduto : deleteproduto,
    updtProduto : updtProduto,
    getclientes : getclientes,
    getcliente : getcliente,
    addcliente : addcliente,
    deletecliente : deletecliente,
    updtCliente : updtCliente,
    getprodutores : getprodutores,
    getprodutor : getprodutor,
    addprodutor : addprodutor,
    deleteprodutor : deleteprodutor,
    updtProdutor : updtProdutor,
    getpedidos : getpedidos,
    getpedido : getpedido,
    addpedido : addpedido,
    deletepedido : deletepedido,
    updtPedido : updtPedido
}