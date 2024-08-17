import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaPencilAlt, FaSave, FaEye } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

function TaskItems({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate || '');

  // use react bootsrap modal to show preview of task
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// update completed task
  const toggleComplete = () => {
    updateTask(task.id, { ...task, completed: !task.completed });
  };
// handle edit
  const handleEdit = () => {
    setIsEditing(true);
  };
// update task edited
  const handleUpdate = () => {
    updateTask(task.id, {
      ...task,
      name: editedName,
      description: editedDescription,
      dueDate: editedDueDate,
    });
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="app task-form">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Task Name"
          />
          <textarea
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Task Description"
          />
          <input
            type="date"
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
            placeholder="Due Date"
          />
          <button className="save" onClick={handleUpdate}>
            <FaSave /> Save
          </button>
        </div>
      ) : (
        <div>
           <input onClick={toggleComplete}
              type="checkbox"
              checked={task.completed}
            />&nbsp;
          <span>
            <strong>{task.name}</strong>: {task.description.slice(0, 100)}
          </span>
          <p style={{color: "#000"}}>
           <em>Due Date:</em> {task.dueDate}
          </p>
          <div className="action-btn">
            <button onClick={handleShow}>
              <FaEye /> Preview
            </button>
            <button onClick={handleEdit} style={{ backgroundColor: '#9fd158' }}>
              <FaPencilAlt /> Edit
            </button>
            <button onClick={() => deleteTask(task.id)} className="color">
              <MdDelete /> Delete
            </button>
          </div>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Title className='center'>{task.name}</Modal.Title>
            <Modal.Body>
              <p style={{color: "#0b0b0b"}}>{task.description}</p>
              <p style={{color: "#0b0b0b"}}>
                <em>Due Date:</em> {task.dueDate}
              </p>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </li>
  );
}

export default TaskItems;
