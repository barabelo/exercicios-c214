const { validate } = require("validate.js");

var constraints = {
    dividendo: {
        type: 'number',
    },
    divisor: {
        type: 'number',
    },
};

module.exports = {
    dividir: function (dividendo, divisor) {
        if (validate({ dividendo }, constraints) !== undefined) {
            return 'Erro! O dividendo deve ser um número.';
        } else if (validate({ divisor }, constraints) !== undefined) {
            return 'Erro! O divisor deve ser um número.';
        } else if (divisor == 0) {
            return 'Erro! O divisor não pode ser 0.';
        }
        else {
            return dividendo / divisor;
        }
    }
}