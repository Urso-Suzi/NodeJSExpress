// const rota = require('express').Router;
const { Router } = require('express');
const router = Router();

//get post put delete

router.get('/atendimentos', (req, res) => {
    res.send('Chegou aqui, estamos testando todos os atendimentos...')
})

router.post('/atendimento/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Chegou aqui, estamos atualizando o atendimento ${id}...`)
})

router.post('/atendimentos', (req, res) => {
    res.send('Chegou aqui, estamos criando um novo atendimento...')
})

router.delete('/atendimentos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Chegou aqui, estamos deletando este atendimento ${id}...`)
})

module.exports = router;