const db = require('../../../data/config');

function getAppointments() {
    const appointments = db('appointment')

    if(!appointments) {
        return null
    } else {
        return appointments
    }
}

function addAppointment(runData) {
    db('appointment').insert(runData, 'id')
        .then(run => {
            return findRun(run)
        })
}

function deleteRun(id) {
    return db('appointment')
        .where('id', id)
        .del()
}

function findRun(id) {
    return db('appointment').where({id}).first();
}

module.exports = {
    getAppointments,
    addAppointment,
    deleteRun
}