import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const Todo = ({ task }) => {
    const ctx = useContext(TodoContext);
    return (
        <div>
            <li className={task.isCompleted ? "d-flex justify-content-between align-items-center list-group-item rounded-2 mb-2 text-decoration-line-through text-danger " : "d-flex justify-content-between  align-items-center list-group-item rounded-2 mb-2 "}>
                <div role='button' onClick={() => { ctx.toggleComplete(task.id) }} className='w-75 '>
                    {task.desc}
                </div>
                <div>
                    <button className='btn btn-warning me-1' onClick={() => {
                        ctx.toggleEditing(task.id)
                    }}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className='btn btn-danger' onClick={() => {
                        ctx.deleteTask(task.id)
                    }}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </li>
        </div >
    )
}

export default Todo;