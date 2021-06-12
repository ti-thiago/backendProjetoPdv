const { Model, DataTypes } = require("sequelize");

class PessoaJuridica extends Model {
  static init(sequelize) {
    super.init(
      {
        idpessoa_juridica: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        razao_social: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Razão Social!",
            },
            notNull: {
              msg: "Preencha o campo Razão Social!",
            },
            len: {
              args: [0, 80],
              msg: "O campo Razão Social no máximo 80 caracter(es).",
            },
          },
        },
        nome_fantasia: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Nome Fantasia!",
            },
            notNull: {
              msg: "Preencha o campo Nome Fantasia!",
            },
            len: {
              args: [0, 80],
              msg: "O campo Nome Fantasia no máximo 80 caracter(es).",
            },
          },
        },
        cnpj: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o CNPJ!",
            },
            notNull: {
              msg: "Preencha o CNPJ!",
            },
            len: {
              args: [0, 14],
              msg: "O campo CNPJ no máximo 14 caracter(es).",
            },
          },
        },
        insc_estadual: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Insc. Estadual!",
            },
            notNull: {
              msg: "Preencha o campo Insc. Estadual!",
            },
            len: {
              args: [0, 14],
              msg: "O campo Insc. Estadual deve ter no máximo 14 caracter(es).",
            },
          },
        },
        cep: {
          type: DataTypes.INTEGER,
          validate: {
            len: {
              args: [0, 8],
              msg: "O campo CEP deve ter no máximo 8 caracter(es).",
            },
          },
        },
        logradouro: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 120],
              msg: "O campo Logradouro deve ter no máximo 120 caracter(es).",
            },
          },
        },
        numero: {
          type: DataTypes.INTEGER,
          validate: {
            len: {
              args: [0, 8],
              msg: "O campo Número deve ter no máximo 5 caracter(es).",
            },
          },
        },
        bairro: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 60],
              msg: "O campo Bairro deve ter no máximo 60 caracter(es).",
            },
          },
        },
        uf: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 2],
              msg: "O campo UF deve ter no máximo 2 caracter(es).",
            },
          },
        },
        municipio: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 60],
              msg: "O campo Município deve ter no máximo 60 caracter(es).",
            },
          },
        },
        telefone: {
          type: DataTypes.BIGINT,
          validate: {
            len: {
              args: [0, 11],
              msg: "O campo Telefone  deve ter no máximo 11 caracter(es).",
            },
          },
        },
        e_mail: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 80],
              msg: "O campo E-MAIL deve ter no máximo 80 caracter(es).",
            },
          },
        },
        pessoa_contato: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 60],
              msg: "O campo Pessoa Contato deve ter no máximo 60 caracter(es).",
            },
          },
        },
        observacao: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 250],
              msg: "O campo Observação deve ter no máximo 250 caracter(es).",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "pessoa_juridica",
      }
    );
  }
}

module.exports = PessoaJuridica;
