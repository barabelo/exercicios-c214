const { validate } = require("validate.js");

var constraints = {
    base: {
        type: 'number',
    },
    expoente: {
        type: 'number',
    },
};

module.exports = {
    potencia: function (base, expoente) {
        if (validate({ base }, constraints) !== undefined) {
            return 'Erro! A base deve ser um número.';
        } else if (validate({ expoente }, constraints) !== undefined) {
            return 'Erro! O expoente deve ser um número.';
        } else {
            return base ** expoente;
        }
    }
}