const convert = require('xml-js');
const fs = require('fs');
const path = require('path');
const poolMysql = require('../middleware/pool-factory');

exports.get = (req, res, next) => {
  res.status(200).send('Ok');
};
exports.post = (req, res, next) => {
  res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
  const { id } = req.params;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
  const { id } = req.params;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
