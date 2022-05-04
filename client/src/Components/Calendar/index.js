import React, {useState, useEffect} from 'react';
import Scheduler from 'devextreme-react/scheduler';

// import { data } from '../_calendarComponents/data';
import axios from 'axios';

const currentDate = Date.now();
<<<<<<< HEAD
const views = ['day', 'week', 'month'];
=======
const views = ['day', 'week', 'workWeek', 'month'];
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12

export default function MyCalendar() {
  
  const token = localStorage.getItem('auth')

<<<<<<< HEAD
  // console.log('token: ', token)
=======
  console.log('token: ', token)
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12

  const [runData, setRunData] = useState([])

  const getData = async () => {
    await axios.get('http://localhost:8080/api/runs/list', {headers: {authorization: token}})
    .then(res => {
<<<<<<< HEAD
      // console.log('Runs Respose: ', res.data.Runs)
=======
      console.log('Runs Respose: ', res.data.Runs)
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12
      setRunData(res.data.Runs)
    })
  }

  const addAppointment = (e) => {
<<<<<<< HEAD
    // console.log(e.appointmentData);

    const {allDay, description, endDate, startDate, text} = e.appointmentData;

    // console.log({allDay, description, endDate, startDate, text})
=======
    console.log(e.appointmentData);

    const {allDay, description, endDate, startDate, text} = e.appointmentData;

    console.log({allDay, description, endDate, startDate, text})
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12

    axios.post('http://localhost:8080/api/runs/add_run', {allDay, description, endDate, startDate, text}, { headers: {authorization: token}})

  }

  const updateAppointment = (e) => {
<<<<<<< HEAD
    // console.log('Update: ', e.appointmentData)
=======
    console.log('Update: ', e.appointmentData)
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12
    const {id, allDay, description, endDate, startDate, text} = e.appointmentData;
    axios.put(`http://localhost:8080/api/runs/update/${id}`, {allDay, description, endDate, startDate, text}, { headers: {authorization: token}})

  }

  const deleteAppointment = (e) => {
<<<<<<< HEAD
    // console.log(e.appointmentData);
=======
    console.log(e.appointmentData);
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12

    const token = localStorage.getItem('auth')

    const {id} = e.appointmentData;

<<<<<<< HEAD
    // console.log('Deleted id: ', id)
=======
    console.log('Deleted id: ', id)
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12

    axios.delete(`http://localhost:8080/api/runs/${id}`, {headers: {authorization: token}})

  }



  useEffect(() => {
    getData()
  }, [])

  return (
<<<<<<< HEAD
    <div>
      <Scheduler
      timeZone="America/Los_Angeles"
      dataSource={runData}
      views={views}
      defaultCurrentView="week"
      defaultCurrentDate={currentDate}
      height={600}
      startDayHour={9}
      firstDayOfWeek={1}
      onAppointmentAdded={addAppointment}
      onAppointmentDeleted={deleteAppointment}
      onAppointmentUpdated={updateAppointment}
      />      
    </div>
=======
    <Scheduler
    timeZone="America/Los_Angeles"
    dataSource={runData}
    views={views}
    defaultCurrentView="week"
    defaultCurrentDate={currentDate}
    height={600}
    startDayHour={9}
    firstDayOfWeek={1}
    onAppointmentAdded={addAppointment}
    onAppointmentDeleted={deleteAppointment}
    onAppointmentUpdated={updateAppointment}
    />
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12
  )
}