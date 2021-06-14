const PessoaFisica = require('../models/pessoaFisicaModel');
const User = require('../models/userModel');

exports.get = async (req, res, next) => {
  const { id } = req.params;
  let pessoaFisica;
  try {
    if (id) pessoaFisica = await PessoaFisica.findByPk(id);

    if (!pessoaFisica) throw new Error('Não foi encontrado pessoa física');
    return res.status(200).json(pessoaFisica);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};
exports.post = async (req, res, next) => {
  try {
    const { nome_usuario, senha } = req.body;
    if (!nome_usuario || !senha)
      throw new Error('Login ou senha não informados');

    const pessoaFisica = await User.findAll({
      where: {
        nome_usuario,
        senha,
      },
    });

    if (!pessoaFisica.length) throw new Error('Usuário não encontrado');
    const { idusuario, idpessoa_fisica } = pessoaFisica[0];

    const result = await PessoaFisica.findByPk(idpessoa_fisica);

    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};
exports.put = (req, res, next) => {
  const { id } = req.params;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
  const { id } = req.params;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
