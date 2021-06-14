const Venda = require('../models/vendaModel');

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
    return res.status(500).send(`${err}`);
  }
};
exports.post = async (req, res, next) => {
  const transaction = await Venda.sequelize.transaction();
  try {
    await Venda.create(
      {
        idpessoa_fisica: req.body.idpessoa_fisica,
        idpessoa_juridica: req.body.idpessoa_juridica,
        valor_bruto: req.body.valor_bruto,
        valor_desconto: req.body.valor_desconto,
        valor_liquido: req.body.valor_liquido,
        status: 'A',
      },
      { transaction }
    );

    await transaction.commit();
    return res.status(201).json(`Venda efetuada com sucesso!`);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send(`Erro ao efetuar a entrada da NF ${err.message}`);
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
    return res.status(500).send(`${err}`);
  }
};
