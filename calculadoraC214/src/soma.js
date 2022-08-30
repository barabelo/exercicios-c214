const { validate } = require("validate.js");

var constraints = {
    parcela1: {
        type: 'number',
    },
    parcela2: {
        type: 'number',
    },
};

module.exports = {
    somar: function (parcela1, parcela2) {
        if ((validate({ parcela1 }, constraints) !== undefined) ||
            validate({ parcela2 }, constraints) !== undefined) {
            return 'Erro! As parcelas de uma soma devem ser números.';
        }
        return parcela1 + parcela2;
    }
}