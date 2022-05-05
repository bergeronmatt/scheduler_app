import React, {useState, useEffect} from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const currentDate = Date.now();

const views = ['day', 'week', 'month'];

export default function MyCalendar() {

  console.log('base url: ', process.env.REACT_APP_BASE_URL);
  
  const [runData, setRunData] = useState([])

  const getData = async () => {
    await axiosWithAuth().get('runs/list')
    .then(res => {
      setRunData(res.data.Runs)
    })
  }

  const addAppointment = (e) => {

    const {allDay, description, endDate, startDate, text} = e.appointmentData;

    axiosWithAuth().post('runs/add_run', {allDay, description, endDate, startDate, text})

  }

  const updateAppointment = (e) => {

    const {id, allDay, description, endDate, startDate, text} = e.appointmentData;
    axiosWithAuth().put(`runs/update/${id}`, {allDay, description, endDate, startDate, text})

  }

  const deleteAppointment = (e) => {

    const {id} = e.appointmentData;

    axiosWithAuth().delete(`runs/${id}`)

  }



  useEffect(() => {
    getData()
  }, [])

  return (
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
  )
}