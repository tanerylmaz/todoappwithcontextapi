import React, { useEffect, useState } from 'react'
import TodoAddForm from './TodoAddForm';
import TodoContainer from './TodoContainer.js';
import { TodoContext } from '../Context/TodoContext.js';
import { v4 as uuidv4 } from 'uuid';
import TodoFilter from './TodoFilter.js';


const TodoWrapper = () => {
    const [taskList, setTaskList] = useState(
        localStorage.getItem("todo-app-react") != null ? JSON.parse(localStorage.getItem("todo-app-react")) : []
    );
    const [filterMode, setFilterMode] = useState("all");

    useEffect(() => {
        getLocalStorage();
    }, []);
    useEffect(() => {
        setLocalStorage();
    }, [taskList]);

    const addTask = _desc => {
        setTaskList([...taskList, {
            id: uuidv4(),
            desc: _desc,
            isCompleted: false,
            isEditing: false
        }]);
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
            taskList.map(task => task.id === id ? { ...task, isEditing: true } : { ...task, isEditing: false })
        );

    }

    const updateTask = (id, _desc) => {
        setTaskList(
            taskList.map(task => task.id == id ? { ...task, desc: _desc, isEditing: !task.isEditing } : task)
        );

    };

    const clearAll = () => {
        setTaskList([]);

    };

    const setLocalStorage = () => {
        localStorage.setItem("todo-app-react", JSON.stringify(taskList));
    };

    const getLocalStorage = () => {
        let item = localStorage.getItem("todo-app-react");
        if (item != null) {
            setTaskList(JSON.parse(item));
        };
    };


    return (
        <TodoContext.Provider value={{ taskList, addTask, toggleComplete, deleteTask, toggleEditing, updateTask, clearAll, setFilterMode, filterMode }}>
            <div className='container w-50 p-5'>
                <TodoAddForm />
                <TodoFilter />
                <TodoContainer />
            </div>
        </TodoContext.Provider>
    )
}

export default TodoWrapper;