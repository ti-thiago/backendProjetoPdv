const EntradaNota = require('../models/entradaNotaModel');

exports.get = async (req, res, next) => {
  const { id } = req.params;
  let result;
  try {
    if (id) {
      result = await EntradaNota.findByPk(id);
    } else {
      result = await EntradaNota.findAll();
    }

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json(`Ocorreu um erro ao obter os dados de produto ${err}`);
  }
};

exports.post = async (req, res, next) => {
  const transaction = await EntradaNota.sequelize.transaction();
  try {
    if (!req.body.idpessoa_fisica && !req.body.idpessoa_juridica)
      throw new Error('informe a pessoa ou estabelecimento');

    await EntradaNota.create(
      {
        idpessoa_fisica: req.body.idpessoa_fisica,
        idpessoa_juridica: req.body.idpessoa_juridica,
        valor_bruto: req.body.valor_bruto,
        valor_desconto: req.body.valor_desconto,
        valor_liquido: req.body.valor_liquido,
        nota_fiscal: req.body.nota_fiscal,
      },
      { transaction }
    );

    await transaction.commit();
    return res.status(201).json(`Cadastro de nota efetuado com sucesso!`);
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
    const entradaNota = await EntradaNota.findByPk(id);

    await entradaNota.destroy();

    return res.status(201).json(`Usuário excluído com sucesso`);
  } catch (err) {
    return res.status(500).json(err);
  }
};
