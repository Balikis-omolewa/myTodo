import { useState } from 'react';
import TaskItems from './TaskItems';
import { IoIosArrowForward } from "react-icons/io";

function TaskList({ tasks, updateTask, deleteTask }) {
  const [showAllPending, setShowAllPending] = useState(false);
  const [showAllCompleted, setShowAllCompleted] = useState(false);

  // Filter tasks into pending and completed
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  // Determine the number of items to display for each category
  const pendingItemsToShow = showAllPending ? pendingTasks : pendingTasks.slice(0, 2);
  const completedItemsToShow = showAllCompleted ? completedTasks : completedTasks.slice(0, 2);

  return (
    // Render the TaskList component with the filtered and sliced tasks
    <div className="task-list-container">
      <div className="list-text">
        <p>My Todo List</p>
      </div>

      {/* Render a toggle button for showing all pending or completed tasks */}
      <div>
       {/* Render Pending Tasks Section only if there are pending tasks */}
       {pendingTasks.length > 0 && (
          <>
            {/* add view more to display only when pending task length is greater 2 */}
            {!showAllPending && pendingTasks.length > 2 && (
              <p onClick={() => setShowAllPending(true)} className="show-more-button" style={{ float: 'right' }}>
                View More <IoIosArrowForward />
              </p>
            )}
            <p>Pending Tasks</p>
            <ul className="task-list">
              {pendingItemsToShow.map((task) => (
                <TaskItems key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
              ))}
            </ul>
          </>
        )}
         {/* Render Completed Tasks Section only if there are completed tasks */}
         {completedTasks.length > 0 && (
          <>
           {/* add view more to display only when completed task length is greater 2 */}
            {!showAllCompleted && completedTasks.length > 2 && (
              <p onClick={() => setShowAllCompleted(true)} className="show-more-button" style={{ float: 'right' }}>
                View More <IoIosArrowForward />
              </p>
            )}
            <p>Completed Tasks</p>
            <ul className="task-list">
              {completedItemsToShow.map((task) => (
                <TaskItems key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskList;
