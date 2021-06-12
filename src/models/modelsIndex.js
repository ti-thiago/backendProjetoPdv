const PessoaFisica = require("./pessoaFisicaModel");
const Usuario = require("./userModel");
const PessoaJuridica = require("./pessoaJuridicaModel");
const Produto = require("./produtoModel");
const MovimentacaoProduto = require("./movimentacaoProdutoModel");
const Venda = require("./vendaModel");
const EntradaNota = require("./entradaNotaModel");

const models = [
  PessoaFisica,
  MovimentacaoProduto,
  PessoaJuridica,
  Produto,
  Usuario,
  Venda,
  EntradaNota,
];
module.exports = models;
