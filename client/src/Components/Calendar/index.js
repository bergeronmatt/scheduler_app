import React from 'react';
import Scheduler from 'devextreme-react/scheduler';

import { data } from '../_calendarComponents/data';

const currentDate = new Date(2021, 3, 29);
const views = ['day', 'week', 'workWeek', 'month'];

export default function MyCalendar() {

  return (
    <Scheduler
    timeZone="America/Los_Angeles"
    dataSource={data}
    views={views}
    defaultCurrentView="week"
    defaultCurrentDate={currentDate}
    height={600}
    startDayHour={9} />
  )
}