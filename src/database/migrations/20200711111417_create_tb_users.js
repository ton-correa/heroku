exports.up = (knex) => {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id');
        table.text('email').notNullable();
        table.text('password').notNullable();
     });
};

exports.down = knex => { knex.schema.dropTable("users"); };
