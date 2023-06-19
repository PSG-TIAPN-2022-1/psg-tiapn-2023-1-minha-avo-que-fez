//const express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "host",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

function registerCliente() {
  //registerParameters = ["Nome", "Email", "Celular", "Senha", "CPF", ""]
  registerInputs = document.querySelectorAll(".registerInput")
  //loginInputs = document.querySelectorAll(".loginInput")

  var sql = `
    INSERT INTO Usuarios("Nome", "Email", "Celular", "Senha", "CPF", "Endereco") 
    VALUES ("${registerInputs.join("\", \"")}")
  `;

  con.query(sql, function (err, result) {
    if(err){
      throw err
    }

    console.log("Usuário cadastrado com sucesso!");
  });
}

function loginCliente() {
  loginParameters = ["Nome", "Senha"]
  loginInputs = document.querySelectorAll(".loginInput")

  var sql = `
    SELECT Codigo_cliete FROM Usuarios WHERE Email = "${loginInputs[0]}" AND senha = "${loginInputs[1]}")
  `;

  con.query(sql, function (err, result) {
    if(err){
      throw err
    }
    localStorage.setItem("Codigo_cliente", result[0])
    console.log("Usuário cadastrado com sucesso!");   
  });
}