const PessoaFisica = require('../models/pessoaFisicaModel');
const Usuario = require('../models/userModel');

exports.get = async (req, res, next) => {
  const { id } = req.params;
  let result;
  try {
    if (id) {
      result = await Usuario.findByPk(id);
    } else {
      result = await Usuario.findAll();
    }

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json(`Ocorreu um erro ao obter os dados de usuário ${err}`);
  }
};

exports.post = async (req, res, next) => {
  const transaction = await Usuario.sequelize.transaction();
  try {
    await Usuario.create(
      {
        idpessoa_fisica: req.body.idpessoa_fisica,
        nome_usuario: req.body.nome_usuario,
        senha: req.body.senha,
      },

      { transaction }
    );

    await transaction.commit();

    return res
      .status(201)
      .json(`Cadastro realizado com sucesso! Seja bem vindo `);
  } catch (err) {
    return res.status(500).send(`Erro ao cadastrar ${err}`);
  }
};

exports.put = async (req, res, next) => {
  const { id } = req.params;
  const transaction = await PessoaFisica.sequelize.transaction();
  try {
    const usuario = Usuario.findByPk(id);
    if (!usuario) throw new Error('Usuário não foi encontrado ');

    await usuario.update(
      {
        idpessoa_fisica: req.body.idpessoa_fisica,
        nome_usuario: req.body.nome_usuario,
        senha: req.body.senha,
      },
      {
        where: { idusuario: id },
      },
      { transaction }
    );

    await transaction.commit();

    return res.json(usuario);
  } catch (err) {
    return res.status(500).send(`${err}`);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);

    await usuario.destroy();

    return res.status(200).json(`Usuário excluído com sucesso`);
  } catch (err) {
    return res.status(500).send(`${err}`);
  }
};
