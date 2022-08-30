const { validate } = require("validate.js");

var constraints = {
    minuendo: {
        type: 'number',
    },
    subtraendo: {
        type: 'number',
    },
};

module.exports = {
    subtrair: function (minuendo, subtraendo) {
        if (validate({ minuendo }, constraints) !== undefined) {
            return 'Erro! O minuendo deve ser um número.';
        } else if (validate({ subtraendo }, constraints) !== undefined) {
            return 'Erro! O subtraendo deve ser um número.';
        } else {
            return minuendo - subtraendo;
        }
    }
}