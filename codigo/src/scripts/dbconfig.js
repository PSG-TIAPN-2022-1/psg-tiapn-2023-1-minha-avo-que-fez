const config = {
  server : "localhost",
  authentication : {
    type : "default",
    options : {
      username : "root",
      password : ""
    }
  },

  options : {
    encrypt : false,
    database : "TemperoDeCasa"
  },

  port : 1433
}

module.exports = config;