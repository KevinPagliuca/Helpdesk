const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { id } = req.params;

        const user = await connection('users')
            .select('*')
            .where('id', id)
            .first();

        return res.json(user);
    },

    async create(req, res) {
        const { name, email, dept, role, password, confPassword } = req.body;

        var date = new Date();
        const DataHoje = date.toLocaleString();

        const consult = await connection('users')
            .select('*')
            .where('email', email)
            .first();

        if (!consult) {
            if (password === confPassword) {
                const insertUser = await connection('users').insert({
                    name,
                    email,
                    dept,
                    role,
                    password,
                    created_at: DataHoje,
                    updated_at: DataHoje
                });

                res.status(201).json(insertUser);
            } else {
                res.status(400).json({ Error: "Senhas não conferem, tente novamente" });
            }
        } else {
            res.status(400).json({ Error: "E-mail já existe!" })
        }
    },
    async login(req, res) {
        const { email, password } = req.body;

        const consult = await connection('users')
            .select('*')
            .where('email', email)
            .where('password', password)
            .first();

        if (!consult) {
            return res.status(400).json({ error: "Dados incorretos, confira e tente novamente!" });
        }

        return res.json(consult);
    },
}