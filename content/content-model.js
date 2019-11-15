const db = require('../database/db-config');

module.exports = {
    find,
    findBy,
    add,
    update,
    remove
}

function find() {
    return db('content');
}

function findBy(filter) {
    return db('content').where(filter);
}

function add(newContent) {
    return db('content')
        .insert(newContent, 'id')
        .then(([id]) => {
            return db('content').where({ id }).first();
        });
}

function update(changes, id) {
    const count = db('content').where({ id }).update(changes);
    if (!count) { return null }
    return findBy({ id });
}

function remove(id) {
    const old = findBy({ id });
    if (!old) { return null }
    const count = db('content').where({ id }).del();
    return old.first();
}