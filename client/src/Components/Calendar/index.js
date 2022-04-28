import React from 'react';
import Scheduler from 'devextreme-react/scheduler';

import { data } from '../_calendarComponents/data';

const currentDate = Date.now();
const views = ['day', 'week', 'workWeek', 'month'];

export default function MyCalendar() {

  const addAppointment = (e) => {
    console.log(e.appointmentData);
  }

  return (
    <Scheduler
    timeZone="America/Los_Angeles"
    dataSource={data}
    views={views}
    defaultCurrentView="week"
    defaultCurrentDate={currentDate}
    height={600}
    startDayHour={9} 
    onAppointmentAdded={addAppointment}
    />
  )
}