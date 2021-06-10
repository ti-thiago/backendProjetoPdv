const { Model, DataTypes } = require("sequelize");

class EntradaNota extends Model {
  static init(sequelize) {
    super.init(
      {
        identrada_nota: {
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
        nota_fiscal: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Nota Fiscal!",
            },
            notNull: {
              msg: "Preencha o campo Nota Fiscal!",
            },
          },
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
        tableName: "entrada_nota",
      }
    );
  }
}

module.exports = EntradaNota;
