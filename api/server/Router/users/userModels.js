const db = require('../../../data/config');

// Get all the Users
function getUsers() {
    const users = db('user')

    if(!users) {
        return null
    } else {
        return users
    }
}

// Get a User by their Id
function findUser(id) {
    return db('user')
        .where({id})
        .first();
}

// Add a New User
function addUser(userData) {
    db('user').insert(userData, 'id')
        .then(user => {
            return user
        })
}

// Update User
function updateUser(id, userData) {
    db('user')
        .where('id', id)
            .updated(runData)
            .then(() => {
                return findUser(id)
            })
}

// Delete User
function deleteUser(id) {
    return db('user')
        .where('id', id)
            .del()
}

module.exports = {
    getUsers,
    findUser,
    addUser,
    updateUser,
    deleteUser
}