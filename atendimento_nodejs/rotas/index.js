const rotaAtendimento = require('./atendimentoRota')
module.exports = (app) => {
    app.use(rotaAtendimento)
}