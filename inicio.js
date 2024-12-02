const express = require('express');
const app = express();

app.use(express.json());
let users = [
    {
        id:1,
        nome:"jose"
    }
];
app.put('/users/:id', (req, res) => {

    const {id} = reg.params;
    const {nome} = reg.body;
    const user = users.find(u => u.id === parseInt(id));
        if (user) {
        user.name = nome;
        res.status(201).json({ message: 'Usuvário atualizado com sucesso!'});
        }else {
        res.status(404).json({ message: 'Usuário não encontrado' });
        }
    });

    app. listen(3000, () => {
        console.Llog('API rodando na porta 3000');
    });