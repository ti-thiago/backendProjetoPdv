const convert = require('xml-js');
const fs = require('fs');
const path = require('path');
const poolMysql = require('../middleware/pool-factory');
const util = require('../utils/util');

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

exports.post = (req, res, next) => {
  const {
    nome,
    nr_cpf,
    dt_nascimento,
    nr_identidade,
    orgao_emissor_rg,
    uf_orgao_emissor_rg,
    dt_emissao_rg,
    estado_civil,
    sexo,
    cep,
    logradouro,
    numero,
    bairro,
    municipio,
    uf,
    tel_residencial,
    tel_celular,
    tel_adicional,
    e_mail,
    whatsapp,
  } = req.body;

  poolMysql.query(
    `INSERT INTO pessoa_fisica (nome,
      nr_cpf,
      dt_nascimento,
      nr_identidade,
      orgao_emissor_rg,
      uf_orgao_emissor_rg,
      dt_emissao_rg,
      estado_civil,
      sexo,
      cep,
      logradouro,
      numero,
      bairro,
      municipio,
      uf,
      tel_residencial,
      tel_celular,
      tel_adicional,
      e_mail,
      whatsapp) VALUES ('${nome},
        ${nr_cpf},
        ${dt_nascimento},
        ${nr_identidade},
        ${orgao_emissor_rg},
        ${uf_orgao_emissor_rg},
        ${dt_emissao_rg},
        ${estado_civil},
        ${sexo},
        ${cep},
        ${logradouro},
        ${numero},
        ${bairro},
        ${municipio},
        ${uf},
        ${tel_residencial},
        ${tel_celular},
        ${tel_adicional},
        ${e_mail},
        ${whatsapp},')`,
    (err, rows, fields) => {
      if (err) return res.status(500).send(`Erro ao cadastrar ${err.message}`);
      return res
        .status(201)
        .json(`Cadastro realizado com sucesso! Seja bem vindo ${nome}`);
    }
  );
};
exports.put = (req, res, next) => {
  const { id } = req.params;

  // poolMysql.query(`UPDATE pessoa_fisica SET qtd_ocorrencia = qtd_ocorrencia + ${quantidade}
  // //             WHERE idmedico = ${req.body.idmedico}
  // //                   AND idestabelecimento = ${session.idEstabelecimento}
  // //                   AND idespecialidade = ${req.body.idespecialidade}
  // //                   AND status = 'A'
  // //                   AND idmedicamento_padrao IN (${codigo}`;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
  const { id } = req.params;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
