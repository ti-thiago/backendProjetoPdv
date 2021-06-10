const convert = require('xml-js');
const fs = require('fs');
const path = require('path');
const poolMysql = require('../middleware/pool-factory');
const User = require('../models/userModel');

exports.get = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
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
