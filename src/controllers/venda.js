const Venda = require('../models/vendaModel');
const MovimentacaoProduto = require('../models/movimentacaoProdutoModel');

exports.get = async (req, res, next) => {
  const { id } = req.params;
  let result;
  try {
    if (id) {
      result = await Venda.findByPk(id);
    } else {
      result = await Venda.findAll();
    }

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};
exports.post = async (req, res, next) => {
  const transaction = await Venda.sequelize.transaction();

  try {
    const venda = await Venda.create(
      {
        idpessoa_fisica: req.body.idpessoa_fisica,
        idpessoa_juridica: req.body.idpessoa_juridica,
        vl_bruto: req.body.vl_bruto,
        vl_desconto: req.body.vl_desconto,
        vl_liquido: req.body.vl_liquido,
        status: 'A',
      },
      { transaction }
    );

    req.body.itens.forEach((item) => (item.idvenda = venda.idvenda));

    await MovimentacaoProduto.bulkCreate(req.body.itens, { transaction });

    await transaction.commit();
    return res.status(201).json(`Venda efetuada com sucesso!`);
  } catch (err) {
    await transaction.rollback();
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};
exports.put = (req, res, next) => {
  const { id } = req.params;

  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const venda = await Venda.findByPk(id);

    await venda.destroy();

    return res.status(201).json(`Venda excluída com sucesso`);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};
