const config = {
    server: 'localhost',
    authentication:{
        type: 'default',
        options: {
            userName: 'sa',
            password: 'teste1234'
        }
    },
    options:{
        encrypt: false,
        database: 'TemperodeCasa'
    },
    port: 1433
}

module.exports = config;