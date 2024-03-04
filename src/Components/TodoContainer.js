import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'
import Todo from './Todo';

const TodoContainer = () => {
    const ctx = useContext(TodoContext);
    return (
        <>
            <ul className='list-group'>
                {
                    ctx.taskList.map(task => <Todo key={task.id} task={task} />)
                }
            </ul>
        </>
    )
}

export default TodoContainer