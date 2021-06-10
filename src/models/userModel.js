const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        idusuario: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idpessoa_fisica: {
          type: DataTypes.BIGINT,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Cód. Pessoa Física!",
            },
            notNull: {
              msg: "Preencha o campo Cód. Pessoa Física!",
            },
            isNumeric: {
              msg: "O campo Cód. Pessoa Física deve ser um número.",
            },
          },
        },
        nome_usuario: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo NOME!",
            },
            notNull: {
              msg: "Preencha o campo NOME!",
            },
            len: {
              args: [0, 80],
              msg: "O campo Nome no máximo 80 caracter(es).",
            },
          },
        },
        senha: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Senha!",
            },
            notNull: {
              msg: "Preencha o campo Senha!",
            },
            len: {
              args: [0, 45],
              msg: "O campo Senha no máximo 45 caracter(es).",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "usuario",
      }
    );
  }
}

module.exports = Usuario;
