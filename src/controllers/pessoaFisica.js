const poolMysql = require('../middleware/pool-factory');
const PessoaFisica = require('../models/pessoaFisicaModel');

exports.get = async (req, res, next) => {
  const { id } = req.params;

  let result;
  try {
    if (id) {
      result = await PessoaFisica.findByPk(id);
    } else {
      result = await PessoaFisica.findAll();
    }
    if (!result) throw new Error('Pessoa não encontrada');

    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};
exports.post = async (req, res, next) => {
  const transaction = await PessoaFisica.sequelize.transaction();
  try {
    const pessoaFisica = await PessoaFisica.create(
      {
        nome: req.body.nome,
        dt_nascimento: req.body.dt_nascimento,
        sexo: req.body.sexo,
        nr_cpf: req.body.nr_cpf,
        nm_mae: req.body.nm_mae,
        nr_identidade: req.body.nr_identidade,
        estado_civil: req.body.estado_civil,
        ds_orgao_emissor_ci: req.body.ds_orgao_emissor_ci,
        logradouro: req.body.logradouro,
        dt_emissao_ci: req.body.dt_emissao_ci,
        uf_orgao_emissor_rg: req.body.uf_orgao_emissor_rg,
        cep: req.body.cep,
        municipio: req.body.municipio,
        bairro: req.body.bairro,
        uf: req.body.uf,
        numero: req.body.numero,
        tel_residencial: req.body.tel_residencial,
        tel_celular: req.body.tel_celular,
        tel_adicional: req.body.tel_adicional,
        e_mail: req.body.e_mail,
        whatsapp: req.body.whatsapp,
      },

      { transaction }
    );

    await transaction.commit();

    return res.json(`Sucesso ${pessoaFisica[0]}`);
  } catch (err) {
    await transaction.rollback();
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};
exports.put = async (req, res, next) => {
  const { id } = req.params;

  const transaction = await PessoaFisica.sequelize.transaction();
  try {
    const pessoaFisica = await PessoaFisica.findByPk(id);

    if (!pessoaFisica) throw new Error('Usuário não foi encontrado ');
    await pessoaFisica.update(
      {
        nome: req.body.nome,
        dt_nascimento: req.body.dt_nascimento,
        sexo: req.body.sexo,
        nr_cpf: req.body.nr_cpf,
        nm_mae: req.body.nm_mae,
        nr_identidade: req.body.nr_identidade,
        estado_civil: req.body.estado_civil,
        ds_orgao_emissor_ci: req.body.ds_orgao_emissor_ci,
        logradouro: req.body.logradouro,
        dt_emissao_ci: req.body.dt_emissao_ci,
        uf_orgao_emissor_rg: req.body.uf_orgao_emissor_rg,
        cep: req.body.cep,
        municipio: req.body.municipio,
        bairro: req.body.bairro,
        uf: req.body.uf,
        numero: req.body.numero,
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

    return res.status(201).json(pessoaFisica);
  } catch (err) {
    await transaction.rollback();
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};
// exports.post = (req, res, next) => {
//   try {
//     const {
//       nome,
//       nr_cpf,
//       dt_nascimento,
//       nr_identidade,
//       orgao_emissor_rg,
//       uf_orgao_emissor_rg,
//       dt_emissao_rg,
//       estado_civil,
//       sexo,
//       cep,
//       logradouro,
//       numero,
//       bairro,
//       municipio,
//       uf,
//       tel_residencial,
//       tel_celular,
//       tel_adicional,
//       e_mail,
//       whatsapp,
//     } = req.body;

//     poolMysql.query(
//       `INSERT INTO pessoa_fisica (nome,
//       nr_cpf,
//       dt_nascimento,
//       nr_identidade,
//       orgao_emissor_rg,
//       uf_orgao_emissor_rg,
//       dt_emissao_rg,
//       estado_civil,
//       sexo,
//       cep,
//       logradouro,
//       numero,
//       bairro,
//       municipio,
//       uf,
//       tel_residencial,
//       tel_celular,
//       tel_adicional,
//       e_mail,
//       whatsapp) VALUES ('${nome},
//         ${nr_cpf},
//         ${dt_nascimento},
//         ${nr_identidade},
//         ${orgao_emissor_rg},
//         ${uf_orgao_emissor_rg},
//         ${dt_emissao_rg},
//         ${estado_civil},
//         ${sexo},
//         ${cep},
//         ${logradouro},
//         ${numero},
//         ${bairro},
//         ${municipio},
//         ${uf},
//         ${tel_residencial},
//         ${tel_celular},
//         ${tel_adicional},
//         ${e_mail},
//         ${whatsapp},')`,
//       (err, rows, fields) => {
//         if (err)
//           return res.status(500).send(`Erro ao cadastrar ${err.message}`);
//         return res
//           .status(201)
//           .json(`Cadastro realizado com sucesso! Seja bem vindo ${nome}`);
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(`Erro ao cadastrar ${err}`);
//   }
// };

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const pessoaFisica = await PessoaFisica.findByPk(id);

    await pessoaFisica.destroy();

    return res.status(201).json(`Usuário excluído com sucesso`);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: err.message });
  }
};
