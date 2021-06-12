const path = require('path');
const poolMysql = require('../middleware/pool-factory');
const util = require('../utils/util');
const Produto = require('../models/produtoModel');

exports.post = (req, res, next) => {
  let err;
  if (err) return res.status(500).send(`Erro ao cadastrar ${err.message}`);
  return res
    .status(201)
    .json(`Cadastro realizado com sucesso! Seja bem vindo `);
};
exports.put = (req, res, next) => {
  const { id } = req.params;

  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
  const { id } = req.params;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.get = async (req, res, next) => {
  const { id } = req.params;
  let result;
  try {
    if (id) {
      result = await Produto.findAll({
        where: {
          idproduto: id,
        },
      });
    } else {
      result = await Produto.findAll();
    }

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json(`Ocorreu um erro ao obter os dados de produto ${err}`);
  }
  //   poolMysql.query(
  //     `SELECT *
  // FROM produtos
  // `,
  //     (err, rows, fields) => {
  //       if (err) return res.status(500).json(err);
  //       x = { rows };
  //       return res.status(200).json(x);
  //     }
};
