const knex = require('knex');

exports.up = function(knex){
    return knex.schema.createTable('tickets', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('category').notNullable();
        table.string('priority').notNullable();
        table.string('description').notNullable();
        table.string('assignTo').notNullable();    
        table.string('requester').notNullable();     
        table.string('status').defaultTo('Novo');     
        table.timestamp('created_at');
        table.timestamp('updated_at');
    });
}

exports.down = function(knex){
    return knex.schema.dropTable('tickets');
}