const express = require('express')
const app = express()
 const port = 3000

 const usersRouter = require('./routes/users');

const logAcesso = function (req, res, next) {
  console.log(`[${new Date().toISOString()}] Acesso à página: ${req.url}`);
   next();
};
app.use(logAcesso);


 app.get('/', (req, res) => {
 res.send('<h1>Página Index</h1>')
})

app.get('/signup', (req, res) => {
    res.send('<h1>Página de Cadastro (Signup)</h1>');
});

app.use('/users', usersRouter);



app.use((req, res) => {
    res.status(404).send(`
        <h1>Erro 404: Página não encontrada</h1>
        <p>A página que você está procurando não existe.</p>
        <a href="/">Voltar para a Página Inicial</a>
    `);
});

 app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});








