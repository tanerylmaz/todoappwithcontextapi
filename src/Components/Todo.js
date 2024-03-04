import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'

const Todo = ({ task }) => {
    const ctx = useContext(TodoContext);
    return (
        <div>
            <li className={task.isCompleted ? "d-flex justify-content-between list-group-item rounded-2 mb-2 text-decoration-line-through " : "d-flex justify-content-between list-group-item rounded-2 mb-2 "}>
                <div>
                    {task.desc}
                </div>
                <div>
                    <button className='btn btn-warning btn-sm me-1'>e</button>
                    <button className='btn btn-danger btn-sm' onClick={() => {
                        ctx.deleteTask(task.id)
                    }}>d</button>
                </div>
            </li>
        </div >
    )
}

export default Todo