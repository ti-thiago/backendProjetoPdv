module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // "class-methods-use-this": "off", //class ter o "this"
    // "no-param-reassign": "off", //permitir receber parametro e poder alterar o valor do parametro
    camelcase: 'off', // desligar o camelcase "minhaVariavel"
    // "no-unused-vars": ["error", {"argsIgnorePattern": "next"}] //não dar erro quando não utiliza variavel passada na função
  },
};
