const express = require('express');
const app = express();

    app.use(express.json());
    let users = [
        {
            id:1,
            nome:"julio",
        }
    ];
    app.delete('/users/:id', (req, res) => {

        const {id} = reg.params;
        const index = users.findIndex(u => u.id === Number.parseInt(id));

        if (index !== -1) {
        users.splice(index, 1);
        res.status(200).json({ message: 'Usuário removido com sucesso!'});
        }else {
        res.status(404).json({ message: 'Usuário não encontrado'});
        }
    });
        app. listen(3000, () => {
        console. log('API rodando na porta 3000');
    });

