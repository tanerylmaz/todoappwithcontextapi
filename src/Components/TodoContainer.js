import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'
import Todo from './Todo';
import TodoEditForm from './TodoEditForm';

const TodoContainer = () => {
    const ctx = useContext(TodoContext);
    return (
        <>
            <ul className='list-group'>
                {
                    ctx.taskList.map(task => {
                        if (ctx.filterMode == "all") {
                            if (task.isEditing) {
                                return <TodoEditForm key={task.id} task={task} />
                            }
                            else {
                                return <Todo key={task.id} task={task} />
                            }
                        }
                        else {
                            if (task.isCompleted == ctx.filterMode) {
                                if (task.isEditing) {
                                    return <TodoEditForm key={task.id} task={task} />
                                }
                                else {
                                    return <Todo key={task.id} task={task} />
                                }
                            }
                        }
                    })
                }
            </ul>
        </>
    )
}

export default TodoContainer