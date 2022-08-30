const { validate } = require("validate.js");

var constraints = {
    fator1: {
        type: 'number',
    },
    fator2: {
        type: 'number',
    },
};

module.exports = {
    multiplicar: function (fator1, fator2) {
        if ((validate({ fator1 }, constraints) !== undefined) ||
            validate({ fator2 }, constraints) !== undefined) {
            return 'Erro! Os fatores de uma multiplicação devem ser números.';
        }
        return fator1 * fator2;
    }
}