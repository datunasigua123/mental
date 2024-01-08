// src/Results.js
import React, { useState, useEffect } from 'react';
import taskData from './TaskData';
import DailyTasks from './DailyTasks';
import './Results.css'; // Import the CSS file

const Results = ({ diagnosedDisorder }) => {
  const tasksAndGoals = taskData[diagnosedDisorder] || taskData["No Diagnosis"];
  const [dailyTasks, setDailyTasks] = useState([]);
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    const generateTasksForDay = (day) => {
      const startIdx = (day - 1) * 2;
      const endIdx = startIdx + 2;
      const tasksForDay = tasksAndGoals.slice(startIdx, endIdx);
      return tasksForDay.sort(() => Math.random() - 0.5).slice(0, 2);
    };

    const tasksForCurrentDay = generateTasksForDay(currentDay);
    setDailyTasks((prevTasks) => [...prevTasks, ...tasksForCurrentDay]);
  }, [currentDay, tasksAndGoals]);

  const handleNextDay = () => {
    setCurrentDay(currentDay + 1);
  };

  // Check if diagnosedDisorder is an object with keys { diagnosedDisorder, diagnosisExplanation }
  if (diagnosedDisorder && typeof diagnosedDisorder === 'object' && 'diagnosedDisorder' in diagnosedDisorder) {
    const { diagnosedDisorder: diagnosis, diagnosisExplanation } = diagnosedDisorder;

    return (
      <div>
        <h2>დიაგნოზის შედეგები</h2>
        <p>თქვენ შეიძლება გაწუხებთ {diagnosis}.</p>
        <p>განმარტება: {diagnosisExplanation}</p>

        <h3>ყოველდღიური ამოცანები და მიზნები</h3>
        <DailyTasks tasks={dailyTasks} day={currentDay} />

        <button onClick={handleNextDay}>Next Day</button>
      </div>
    );
  } else {
    // If diagnosedDisorder is not an object, render as usual
    return (
      <div>
        <h2>დიაგნოზის შედეგები</h2>
        <p>თქვენ შეიძლება გაწუხებთ  {diagnosedDisorder}.</p>

        <h3>ყოველდღიური ამოცანები და მიზნები</h3>
        <DailyTasks tasks={dailyTasks} day={currentDay} />

        <button onClick={handleNextDay}>Next Day</button>
      </div>
    );
  }
};

export default Results;
