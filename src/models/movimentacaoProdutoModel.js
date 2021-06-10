const { Model, DataTypes } = require("sequelize");

class MovimentacaoProduto extends Model {
  static init(sequelize) {
    super.init(
      {
        idmovimentacao_produto: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        identrada_produto: {
          type: DataTypes.INTEGER,
          validate: {
            len: {
              args: [0, 8],
              msg: "O campo Entrada Produto deve ter no máximo 8 caracter(es).",
            },
          },
        },
        idvenda: {
          type: DataTypes.INTEGER,
        },
        idproduto: {
          type: DataTypes.INTEGER,
          validate: {
            len: {
              args: [0, 8],
              msg: "O campo Produto deve ter no máximo 8 caracter(es).",
            },
          },
        },

        qtd_entrada: {
          type: DataTypes.DOUBLE,
        },
        qtd_saida: {
          type: DataTypes.DOUBLE,
        },
        vl_compra: {
          type: DataTypes.DOUBLE,
        },
        vl_venda: {
          type: DataTypes.DOUBLE,
        },
      },
      {
        sequelize,
        tableName: "movimentacao_produto",
      }
    );
  }
}

module.exports = MovimentacaoProduto;
