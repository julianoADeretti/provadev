const express = require('express');
const app = express();

app.use(express.json());

let user = [];

app.post('/users', (req, res) => {
    const {name} = reg.body;
    let id = 0;
    users.forEach(user => {
        if (user.id > id){
        id = user. id;

        }
    })
    users.push({ id : id + 1, name });
    res.status(281).json({ message: 'Usuário criado com sucesso!' });
});

app.get('/users/:id', (req, res) => {
    const id = Number.parseInt(req.params.id)
    res.status(200).json(users.find(user => user.id === id));

});

app. listen(3000, () => {
    console. log('API rodando na porta 3000');
});

