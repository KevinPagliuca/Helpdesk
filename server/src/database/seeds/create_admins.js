const bcrypt = require('bcrypt');

const password = 'admin2021';
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(password, salt);

exports.seed = async function (knex) {    

    const newpass = bcrypt.hashSync(password, hash);

    return knex('users').insert({
        name: "Administrador",
        email: 'admin@admin.com',
        dept: "System Admin",
        role: "System",
        password: newpass,
        permission: 1
    });

}