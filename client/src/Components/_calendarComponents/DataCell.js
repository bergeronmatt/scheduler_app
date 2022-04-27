import React from 'react'

function getCurrentTraining(date) {
    const result = (date) % 3;
    const currentTraining = `training-background-${result}`;
    return currentTraining
}

export const DataCell = (props) => {
  
    const {data: {startDate, groups: text}} = props
    const dayClasses = [
        'day-cell',
        getCurrentTraining(startDate.getDate()),
    ];

    return (
        <div className={dayClasses.join(' ')}>
            {text}
        </div>
    
  )
}
