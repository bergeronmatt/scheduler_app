import React, { useState, useEffect } from 'react';
import { Scheduler, Resource } from 'devextreme-react/scheduler';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const currentDate = Date.now();

const views = [''];

export default function MyCalendar() {
  console.log('base url: ', process.env.REACT_APP_BASE_URL);

  const [runData, setRunData] = useState([]);
  const groups = ['status'];

  const status = [{
    text: 'In Process',
    id: 0,
    color: 'red'
  }, {
    text: 'Complete',
    id: 1,
    color: 'green'
  }]

  const getData = async () => {
    await axiosWithAuth()
      .get('runs/list')
      .then((res) => {
        setRunData(res.data.Runs);
      });
  };

  console.log('runData: ', runData);

  const addAppointment = (e) => {
    const { allDay, description, endDate, startDate, text } =
      e.appointmentData;

    axiosWithAuth().post('runs/add_run', {
      allDay,
      description,
      endDate,
      startDate,
      text,
    });
  };

  const updateAppointment = (e) => {
    const { id, allDay, description, endDate, startDate, text } =
      e.appointmentData;
    axiosWithAuth().put(`runs/update/${id}`, {
      allDay,
      description,
      endDate,
      startDate,
      text,
    });
  };

  const deleteAppointment = (e) => {
    const { id } = e.appointmentData;

    axiosWithAuth().delete(`runs/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    // <Scheduler
    // timeZone="America/Los_Angeles"
    // dataSource={runData}
    // views={views}
    // defaultCurrentView="week"
    // defaultCurrentDate={currentDate}
    // height={600}
    // startDayHour={6}
    // firstDayOfWeek={1}
    // onAppointmentAdded={addAppointment}
    // onAppointmentDeleted={deleteAppointment}
    // onAppointmentUpdated={updateAppointment}
    // style={{
    //   height: "100%"
    // }}
    // />

    <Scheduler
      timeZone="America/Los_Angeles"
      dataSource={runData}
      views={views}
      defaultCurrentView="month"
      defaultCurrentDate={currentDate}
      height={580}
      cellDuration={60}
      firstDayOfWeek={0}
      startDayHour={8}
      endDayHour={20}
      onAppointmentAdded={addAppointment}
      onAppointmentDeleted={deleteAppointment}
      onAppointmentUpdated={updateAppointment}
      maxAppointmentsPerCell="unlimited"
          >
      <Resource
        label='Status'
        fieldExpr="status"
        dataSource={status}
        useColorAsDefault={true}
        allowMultiple={false}
      />
    </Scheduler>
  );
}
