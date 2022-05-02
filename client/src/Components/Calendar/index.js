import React, {useState, useEffect} from 'react';
import Scheduler from 'devextreme-react/scheduler';

// import { data } from '../_calendarComponents/data';
import axios from 'axios';

const currentDate = Date.now();
const views = ['day', 'week', 'workWeek', 'month'];

export default function MyCalendar() {
  
  const token = localStorage.getItem('auth')

  console.log('token: ', token)

  const [runData, setRunData] = useState([])

  const getData = async () => {
    await axios.get('http://localhost:8080/api/runs/list', {headers: {authorization: token}})
    .then(res => {
      console.log('Runs Respose: ', res.data.Runs)
      setRunData(res.data.Runs)
    })
  }

  const addAppointment = (e) => {
    console.log(e.appointmentData);

    const {allDay, description, endDate, startDate, text} = e.appointmentData;

    console.log({allDay, description, endDate, startDate, text})

    axios.post('http://localhost:8080/api/runs/add_run', {allDay, description, endDate, startDate, text}, { headers: {authorization: token}})

  }

  const updateAppointment = (e) => {
    console.log('Update: ', e.appointmentData)
    const {id, allDay, description, endDate, startDate, text} = e.appointmentData;
    axios.put(`http://localhost:8080/api/runs/update/${id}`, {allDay, description, endDate, startDate, text}, { headers: {authorization: token}})

  }

  const deleteAppointment = (e) => {
    console.log(e.appointmentData);

    const token = localStorage.getItem('auth')

    const {id} = e.appointmentData;

    console.log('Deleted id: ', id)

    axios.delete(`http://localhost:8080/api/runs/${id}`, {headers: {authorization: token}})

  }



  useEffect(() => {
    getData()
  }, [])

  return (
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
  )
}