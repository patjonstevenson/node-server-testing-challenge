
exports.up = function (knex) {
    return knex.schema.createTable('content', Content => {
        Content.increments();
        Content.string('title').notNullable();
        Content.string('body', 1048).notNullable();
        Content.string('date', 128);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('content');
};
