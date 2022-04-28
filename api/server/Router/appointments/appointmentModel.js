const db = require('../../../data/config');

function getAppointments() {
    const appointments = db('appointment')

    if(!appointments) {
        return null
    } else {
        return appointments
    }
}

module.exports = {
    getAppointments,
}