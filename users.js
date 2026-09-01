const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/signup');
});


router.get('/:userid', (req, res) => {
    const userid = req.params.userid;
    res.send(`<h1>Bem-vindo! Seu ID de usuário é: ${userid}</h1>`);
});

module.exports = router;

