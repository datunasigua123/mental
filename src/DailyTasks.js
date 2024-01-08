import React from 'react';

const DailyTasks = ({ tasks, day }) => {
  const startIdx = (day - 1) * 2;
  const endIdx = startIdx + 2;
  const dailyTasks = tasks.slice(startIdx, endIdx);

  console.log("Debugging - tasks:", tasks);
  console.log("Debugging - dailyTasks:", dailyTasks);

  return (
    <div>
      <h4>დღე {day}</h4>
      <ul>
        {dailyTasks.map((task, index) => (
          <li key={index}>
            <strong>დავალება:</strong> {task.task} <br />
            <strong>მიზეზი:</strong> {task.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyTasks;
