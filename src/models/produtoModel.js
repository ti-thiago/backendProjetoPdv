const { Model, DataTypes } = require("sequelize");

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        idproduto: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        cod_barras: {
          type: DataTypes.INTEGER,
        },
        desc_produto: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Descrição do Produto!",
            },
            notNull: {
              msg: "Preencha o campo Descrição do Produto!",
            },
            len: {
              args: [0, 80],
              msg: "O campo Descrição do Produto no máximo 120 caracter(es).",
            },
          },
        },
        preco_venda: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Preço!",
            },
            notNull: {
              msg: "Preencha o campo Preço!",
            },
          },
        },
        unidade_medida: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Unidade Medida!",
            },
            notNull: {
              msg: "Preencha o campo Unidade Medida!",
            },
            len: {
              args: [0, 3],
              msg: "O campo Unidade Medida no máximo 3 caracter(es).",
            },
          },
        },
        observacao: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 250],
              msg: "O campo Observação no máximo 250 caracter(es).",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "produto",
      }
    );
  }
}

module.exports = Produto;
