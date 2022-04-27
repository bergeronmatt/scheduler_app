import React from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';

import { data, resourcesData } from '../_calendarComponents/data';

const currentDate = new Date(2021, 2, 25);
const views = [{
    type: 'day',
    name: 'Day',
    maxAppointmentsPerCell: 'unlimited',
  }, {
    type: 'week',
    name: 'Week',
    maxAppointmentsPerCell: 'unlimited',
  }, {
    type: 'month',
    name: 'Month',
    maxAppointmentsPerCell: 'unlimited',
  }];

export default function MyCalendar() {

  return (
    <Scheduler
    timeZone="America/Los_Angeles"
    dataSource={data}
    views={views}
    defaultCurrentView="week"
    defaultCurrentDate={currentDate}
    height={650}
    firstDayOfWeek={1}
    startDayHour={6}
    endDayHour={20}
    // appointmentTooltipRender={this.getAppointmentTemplate}
    // onContentReady={this.onContentReady}
    // onAppointmentDeleted={this.hideSchedulerTooltip}
  >
    <Resource
      dataSource={resourcesData}
      fieldExpr="roomId"
      label="Room"
    />
  </Scheduler>
  )
}