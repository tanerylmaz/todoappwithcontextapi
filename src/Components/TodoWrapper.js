import React, { useState } from 'react'
import TodoAddForm from './TodoAddForm';
import TodoContainer from './TodoContainer.js';
import { TodoContext } from '../Context/TodoContext.js';
import { v4 as uuidv4 } from 'uuid';


const TodoWrapper = ({ tasks }) => {
    const [taskList, setTaskList] = useState(tasks);

    const addTask = _desc => {
        setTaskList([...taskList, {
            id: uuidv4(),
            desc: _desc,
            isCompleted: false,
            isEditing: false
        }]);
        console.log(taskList);
    };

    const toggleComplete = id => {
        setTaskList(
            taskList.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)
        );
    };

    const deleteTask = id => {
        setTaskList(taskList.filter(task => task.id != id));
    };

    const toggleEditing = id => {
        setTaskList(
            taskList.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task)
        );
    };

    const updateTask = (id, _desc) => {
        setTaskList(
            taskList.map(task => task.id == id ? { ...task, desc: _desc, isEditing: !task.isEditing } : task)
        );
    };

    return (
        <TodoContext.Provider value={{ taskList, addTask, toggleComplete, deleteTask, toggleComplete, updateTask }}>
            <div className='container w-50 p-5'>
                <TodoAddForm />
                <TodoContainer />
            </div>
        </TodoContext.Provider>
    )
}

export default TodoWrapper;