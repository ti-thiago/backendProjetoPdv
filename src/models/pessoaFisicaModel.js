const { Model, DataTypes } = require("sequelize");

class PessoaFisica extends Model {
  static init(sequelize) {
    super.init(
      {
        idpessoa_fisica: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
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
        nr_cpf: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o CPF!",
            },
            notNull: {
              msg: "Preencha o CPF!",
            },
            len: {
              args: [0, 45],
              msg: "O campo CPF no máximo 80 caracter(es).",
            },
          },
        },
        dt_nascimento: DataTypes.DATEONLY,
        dt_emissao_rg: DataTypes.DATEONLY,
        nr_identidade: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 45],
              msg: "O campo Identidade deve ter no máximo 45 caracter(es).",
            },
          },
        },
        orgao_emissor_rg: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 45],
              msg:
                "O campo Orgão Emissor RG deve ter no máximo 45 caracter(es).",
            },
          },
        },
        uf_orgao_emissor_rg: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 2],
              msg: "O campo UF Emissor RG deve ter no máximo 45 caracter(es).",
            },
          },
        },
        estado_civil: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 1],
              msg: "O campo Estado Civíl deve ter no máximo 1 caracter(es).",
            },
          },
        },
        sexo: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Preencha o campo Sexo!",
            },
            notNull: {
              msg: "Preencha o campo Sexo!",
            },
            len: {
              args: [0, 1],
              msg: "O campo Sexo deve ter no máximo 1 caracter(es).",
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
        tel_residencial: {
          type: DataTypes.INTEGER,
          validate: {
            len: {
              args: [0, 11],
              msg:
                "O campo Telefone Residencial deve ter no máximo 11 caracter(es).",
            },
          },
        },
        tel_celular: {
          type: DataTypes.INTEGER,
          validate: {
            len: {
              args: [0, 11],
              msg:
                "O campo Telefone Celular deve ter no máximo 11 caracter(es).",
            },
          },
        },
        tel_adicional: {
          type: DataTypes.INTEGER,
          validate: {
            len: {
              args: [0, 11],
              msg:
                "O campo Telefone Adicional deve ter no máximo 11 caracter(es).",
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
        whatsapp: {
          type: DataTypes.CHAR,
          validate: {
            len: {
              args: [0, 1],
              msg: "O campo E-MAIL deve ter no máximo 80 caracter(es).",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "pessoa_fisica",
      }
    );
  }
}

module.exports = PessoaFisica;
