const poolMysql = require('../middleware/pool-factory');
const PessoaFisica = require('../models/pessoaFisicaModel');
const Usuario = require('../models/userModel');

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
    return res.status(500).send(`Erro ao cadastrar ${err.message}`);
  }
};
exports.put = async (req, res, next) => {
  const { id } = req.params;
  const transaction = await PessoaFisica.sequelize.transaction();
  try {
    const pessoaFisica = PessoaFisica.findByPk(id);
    if (!pessoaFisica) throw new Error('Usuário não foi encontrado ');

    await PessoaFisica.update(
      {
        nm_pessoa: req.body.nm_pessoa,
        dt_nascimento: req.body.dt_nascimento,
        ie_sexo: req.body.ie_sexo,
        nr_cpf: req.body.nr_cpf,
        nm_mae: req.body.nm_mae,
        nr_identidade: req.body.nr_identidade,
        ds_orgao_emissor_ci: req.body.ds_orgao_emissor_ci,
        dt_emissao_ci: req.body.dt_emissao_ci,
        cep: req.body.cep,
        municipio: req.body.municipio,
        uf: req.body.uf,
        tel_residencial: req.body.tel_residencial,
        tel_celular: req.body.tel_celular,
        tel_adicional: req.body.tel_adicional,
        e_mail: req.body.e_mail,
        whatsapp: req.body.whatsapp,
      },
      {
        where: { idpessoa_fisica: pessoaFisica.idpessoa_fisica },
      },
      { transaction }
    );

    await transaction.commit();

    return res.json(pessoaFisica[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
  // poolMysql.query(`UPDATE pessoa_fisica SET qtd_ocorrencia = qtd_ocorrencia + ${quantidade}
  // //             WHERE idmedico = ${req.body.idmedico}
  // //                   AND idestabelecimento = ${session.idEstabelecimento}
  // //                   AND idespecialidade = ${req.body.idespecialidade}
  // //                   AND status = 'A'
  // //                   AND idmedicamento_padrao IN (${codigo}`;
};
exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const pessoaFisica = await PessoaFisica.findByPk(id);

    await pessoaFisica.destroy();

    return res.status(200).json(`Usuário excluído com sucesso`);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.get = async (req, res, next) => {
  let x;
  // const pass = sha1('123456');

  poolMysql.query(
    `SELECT *
FROM pessoa_fisica
`,
    (err, rows, fields) => {
      if (err) return res.status(500).json(err);
      x = { rows };
      return res.status(200).json(x);
    }
  );
};
