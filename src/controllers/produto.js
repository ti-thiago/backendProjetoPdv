const path = require('path');
const poolMysql = require('../middleware/pool-factory');
const util = require('../utils/util');
const Produto = require('../models/produtoModel');

exports.get = async (req, res, next) => {
  const { id } = req.params;
  let result;
  try {
    if (id) {
      result = await Produto.findByPk(id);
    } else {
      result = await Produto.findAll();
    }

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send(`${err}`);
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

exports.post = async (req, res, next) => {
  try {
    await Produto.create({
      cod_barras: req.body.cod_barras,
      desc_produto: req.body.desc_produto,
      preco_venda: req.body.preco_venda,
      unidade_medida: req.body.unidade_medida,
      observacao: req.body.observacao,
    });

    return res.status(201).send('Produto cadastrado com sucesso');
  } catch (err) {
    return res.status(500).send(`${err}`);
  }
};
exports.put = async (req, res, next) => {
  const { id } = req.params;

  const transaction = await Produto.sequelize.transaction();
  try {
    const produto = await Produto.findByPk(id);

    if (!produto) throw new Error('Produto não encontrado ');
    await produto.update(
      {
        cod_barras: req.body.cod_barras,
        desc_produto: req.body.desc_produto,
        preco_venda: req.body.preco_venda,
        unidade_medida: req.body.unidade_medida,
        observacao: req.body.observacao,
      },
      {
        where: { idproduto: produto.idproduto },
      },
      { transaction }
    );

    await transaction.commit();

    return res.status(201).json(produto);
  } catch (err) {
    return res.status(500).send(`${err}`);
  }
};
exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const produto = await Produto.findByPk(id);

    await produto.destroy();

    return res.status(201).json(`Produto excluído com sucesso`);
  } catch (err) {
    return res.status(500).send(`${err}`);
  }
};
