const { Model, DataTypes } = require("sequelize");

class Venda extends Model {
  static init(sequelize) {
    super.init(
      {
        idvenda: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idpessoa_fisica: {
          type: DataTypes.INTEGER,
        },
        idpessoa_juridica: {
          type: DataTypes.INTEGER,
        },

        valor_bruto: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          defaultValue: 0,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Valor Bruto!",
            },
            notNull: {
              msg: "Preencha o campo Valor Bruto!",
            },
          },
        },
        valor_desconto: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          defaultValue: 0,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Valor Desconto!",
            },
            notNull: {
              msg: "Preencha o campo Valor Desconto!",
            },
          },
        },
        valor_liquido: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          defaultValue: 0,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Valor Desconto!",
            },
            notNull: {
              msg: "Preencha o campo Valor Desconto!",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "venda",
      }
    );
  }
}

module.exports = Venda;
