const poolMysql = require('../middleware/pool-factory');
const MovimentacaoProduto = require('../models/movimentacaoProdutoModel');

exports.get = async (req, res, next) => {
  const { id } = req.params;

  let result;
  try {
    if (id) {
      result = await MovimentacaoProduto.findByPk(id);
    } else {
      result = await MovimentacaoProduto.findAll();
    }

    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.post = async (req, res, next) => {
  const transaction = await MovimentacaoProduto.sequelize.transaction();
  try {
    const movimentacaoProduto = await MovimentacaoProduto.create(
      {
        identrada_produto: req.body.identrada_produto,
        idvenda: req.body.idvenda,
        idproduto: req.body.idproduto,
        qtd_entrada: req.body.qtd_entrada,
        qtd_saida: req.body.qtd_saida,
        vl_compra: req.body.vl_compra,
        vl_venda: req.body.vl_venda,
      },
      { transaction }
    );

    await transaction.commit();

    return res.json(`Sucesso ${movimentacaoProduto[0]}`);
  } catch (err) {
    return res.status(500).send(`${err}`);
  }
};
exports.put = async (req, res, next) => {
  const { id } = req.params;

  const transaction = await MovimentacaoProduto.sequelize.transaction();
  try {
    const movimentacaoProduto = await MovimentacaoProduto.findByPk(id);

    if (!movimentacaoProduto) throw new Error('Movimentação não encontrada');

    await movimentacaoProduto.update(
      {
        identrada_produto: req.body.identrada_produto,
        idvenda: req.body.idvenda,
        idproduto: req.body.idproduto,
        qtd_entrada: req.body.qtd_entrada,
        qtd_saida: req.body.qtd_saida,
        vl_compra: req.body.vl_compra,
        vl_venda: req.body.vl_venda,
      },
      {
        where: {
          idmovimentacao_produto: movimentacaoProduto.idmovimentacao_produto,
        },
      },
      { transaction }
    );

    await transaction.commit();

    return res.status(201).json(movimentacaoProduto);
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const movimentacaoProduto = await MovimentacaoProduto.findByPk(id);

    await movimentacaoProduto.destroy();

    return res.status(201).json(`Movimentação excluída com sucesso`);
  } catch (err) {
    return res.status(500).send(err);
  }
};
