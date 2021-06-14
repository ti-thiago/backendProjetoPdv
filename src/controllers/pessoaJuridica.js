const poolMysql = require('../middleware/pool-factory');
const PessoaJuridica = require('../models/pessoaJuridicaModel');

exports.get = async (req, res, next) => {
  const { id } = req.params;

  let result;
  try {
    if (id) {
      result = await PessoaJuridica.findByPk(id);
    } else {
      result = await PessoaJuridica.findAll();
    }
    if (result) return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send(`${err}`);
  }
};
exports.post = async (req, res, next) => {
  const transaction = await PessoaJuridica.sequelize.transaction();
  try {
    const pessoaJuridica = await PessoaJuridica.create(
      {
        razao_social: req.body.razao_social,
        insc_estadual: req.body.insc_estadual,
        nome_fantasia: req.body.nome_fantasia,
        cnpj: req.body.cnpj,
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        bairro: req.body.bairro,
        numero: req.body.numero,
        municipio: req.body.municipio,
        uf: req.body.uf,
        telefone: req.body.telefone,
        pessoa_contato: req.body.pessoa_contato,
        e_mail: req.body.e_mail,
        observacao: req.body.observacao,
      },

      { transaction }
    );

    await transaction.commit();

    return res.json(`Sucesso ${pessoaJuridica[0]}`);
  } catch (err) {
    return res.status(500).send(`${err}`);
  }
};
exports.put = async (req, res, next) => {
  const { id } = req.params;

  const transaction = await PessoaJuridica.sequelize.transaction();
  try {
    const pessoaJuridica = await PessoaJuridica.findByPk(id);

    if (!pessoaJuridica) throw new Error('Usuário não foi encontrado ');
    await pessoaJuridica.update(
      {
        razao_social: req.body.razao_social,
        insc_estadual: req.body.insc_estadual,
        nome_fantasia: req.body.nome_fantasia,
        cnpj: req.body.cnpj,
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        bairro: req.body.bairro,
        numero: req.body.numero,
        municipio: req.body.municipio,
        uf: req.body.uf,
        telefone: req.body.telefone,
        pessoa_contato: req.body.pessoa_contato,
        e_mail: req.body.e_mail,
        observacao: req.body.observacao,
      },
      {
        where: { idpessoa_juridica: pessoaJuridica.idpessoa_juridica },
      },
      { transaction }
    );

    await transaction.commit();

    return res.status(201).json(pessoaJuridica);
  } catch (err) {
    return res.status(500).send(`${err}`);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const pessoaJuridica = await PessoaJuridica.findByPk(id);

    await pessoaJuridica.destroy();

    return res.status(201).json(`Usuário excluído com sucesso`);
  } catch (err) {
    return res.status(500).send(`${err}`);
  }
};
