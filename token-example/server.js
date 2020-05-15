const express = require('express');

const app = express();

app.use(express.json());

app.get('/login', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    if (login === password) {
        // TODO: set cookie!!!
    }
});

app.use('/person', (req, res, next) => {
    // TODO: check cookie here!
    const isCookieOk = true;
    if (isCookieOk) {
        next();
    } else {
        res.sendStatus(401);
    }
});

app.get('/person', (req, res) => res.send({name: 'Ivan'}));

app.listen(3000);
