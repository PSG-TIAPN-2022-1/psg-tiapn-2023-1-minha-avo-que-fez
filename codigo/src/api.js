var Db = require('./dboperations');
var Produto = require('./produto');
var Produtor = require('./produtor');
var Cliente = require('./cliente');
var Pedido = require('./pedido');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app  = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})

router.route('/produtos').get((request,response)=>{
    dboperations.getprodutos().then(result=>{
        response.json(result[0]);
    })
})

router.route('/produtos/:Codigo_produto').delete((request,response)=>{
    dboperations.deleteproduto(request.params.Codigo_produto).then(results=>{
        response.json(results[0]);
    })
})

router.route('/produtos/:Codigo_produto').get((request,response)=>{
    dboperations.getproduto(request.params.Codigo_produto).then(results=>{
        response.json(results[0]);
    })
})

router.route('/produtos').post((request,response)=>{
    let produto = {...request.body}

    dboperations.addproduto(produto).then(result=>{
        response.status(201).json(result);
    })
}) 

router.route('/produtos').patch((request,response)=>{
    let produto = {...request.body}
    
    dboperations.updtProduto(produto).then(result =>{
        response.status(200).json(result);
    })
})

router.route('/produtores').get((request,response)=>{
    dboperations.getprodutores().then(result=>{
        response.json(result[0]);
    })
})

router.route('/produtores/:Codigo_produtor').delete((request,response)=>{
    dboperations.deleteprodutor(request.params.Codigo_produtor).then(results=>{
        response.json(results[0]);
    })
})

router.route('/produtores/:Codigo_produtor').get((request,response)=>{
    dboperations.getprodutor(request.params.Codigo_produtor).then(results=>{
        response.json(results[0]);
    })
})

router.route('/produtores').post((request,response)=>{
    let produtor = {...request.body}

    dboperations.addprodutor(produtor).then(result=>{
        response.status(201).json(result);
    })
})

router.route('/produtores').patch((request,response)=>{
    let produtor = {...request.body}
    
    dboperations.updtProdutor(produtor).then(result =>{
        response.status(200).json(result);
    })
})

router.route('/clientes').get((request,response)=>{
    dboperations.getclientes().then(result=>{
        response.json(result[0]);
    })
})

router.route('/clientes/:Codigo_cliente').delete((request,response)=>{
    dboperations.deletecliente(request.params.Codigo_cliente).then(results=>{
        response.json(results[0]);
    })
})

router.route('/clientes/:Codigo_cliente').get((request,response)=>{
    dboperations.getcliente(request.params.Codigo_cliente).then(results=>{
        response.json(results[0]);
    })
})

router.route('/clientes').post((request,response)=>{
    let cliente = {...request.body}

    dboperations.addcliente(cliente).then(result=>{
        response.status(201).json(result);
    })
})

router.route('/clientes').patch((request,response)=>{
    let cliente = {...request.body}
    
    dboperations.updtCliente(cliente).then(result =>{
        response.status(200).json(result);
    })
})

router.route('/pedidos').get((request,response)=>{
    dboperations.getpedidos().then(result=>{
        response.json(result[0]);
    })
})

router.route('/pedidos/:Codigo_pedido').delete((request,response)=>{
    dboperations.deletepedido(request.params.Codigo_pedido).then(results=>{
        response.json(results[0]);
    })
})


router.route('/pedidos/:Codigo_pedido').get((request,response)=>{
    dboperations.getpedido(request.params.Codigo_pedido).then(results=>{
        response.json(results[0]);
    })
})

router.route('/pedidos').post((request,response)=>{
    let pedido = {...request.body}

    dboperations.addpedido(pedido).then(result=>{
        response.status(201).json(result);
    })
})

router.route('/pedidos').patch((request,response)=>{
    let pedido = {...request.body}
    
    dboperations.updtPedido(pedido).then(result =>{
        response.status(200).json(result);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('API rodando '+ port);