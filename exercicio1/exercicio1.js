class Veiculo {
    placa
    ano

    constructor(placa, ano) {
        this.placa = placa
        this.ano = ano
    }

    setPlaca(placa) {
        this.placa = placa
    }

    setAno(ano) {
        this.ano = ano
    }

    getPlaca() {
        return this.placa
    }

    getAno() {
        return this.ano
    }

    exibirDados() {
        console.log("Placa:", this.placa)
        console.log("Ano:", this.ano)
    }
}

class Onibus extends Veiculo {
    assentos

    constructor(placa, ano, assentos) {
        super(placa, ano)
        this.assentos = assentos
    }

    setAssentos(assentos) {
        this.assentos = assentos
    }

    getAssentos() {
        return this.assentos
    }

    exibirDados() {
        console.log("Placa:", this.placa)
        console.log("Ano:", this.ano)
        console.log("Assentos:", this.assentos)
    }
}

class Caminhao extends Veiculo {
    eixos

    constructor(placa, ano, eixos) {
        super(placa, ano)
        this.eixos = eixos
    }

    setEixos(eixos) {
        this.eixos = eixos
    }

    getEixos() {
        return this.eixos
    }

    exibirDados() {
        console.log("Placa:", this.placa)
        console.log("Ano:", this.ano)
        console.log("Eixos:", this.eixos)
    }
}

let veiculo = new Veiculo("POO-1808", 2022)
veiculo.exibirDados()

let onibus = new Onibus()
onibus.setPlaca("ABC-1234")
onibus.setAno(1998)
onibus.setAssentos(46)
onibus.exibirDados()

let caminhao = new Caminhao("FGH-9271", 2003, 3)
caminhao.exibirDados()