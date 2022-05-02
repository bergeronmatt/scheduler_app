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

function updateAppointment(id, runData) {

    db('appointment')
        .where('id', id)
            .update(runData)
            .then(() => {
                return findRun(id)
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
    updateAppointment,
    deleteRun
}