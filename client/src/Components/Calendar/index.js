import React, {useState, useEffect} from 'react';
import Scheduler from 'devextreme-react/scheduler';

import { data } from '../_calendarComponents/data';
import axios from 'axios';

const currentDate = Date.now();
const views = ['day', 'week', 'workWeek', 'month'];

export default function MyCalendar() {
  
  const token = localStorage.getItem('auth')

  console.log('token: ', token)

  const [runData, setRunData] = useState([])

  const getData = () => {axios.get('http://localhost:8080/api/runs/list', {headers: {authorization: token}})
    .then(res => {
      console.log('Runs Respose: ', res.data.Runs)
      setRunData(res.data.Runs)
    })}

  const addAppointment = (e) => {
    console.log(e.appointmentData);
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
    />
  )
}