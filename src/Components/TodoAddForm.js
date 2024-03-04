import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoAddForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='container w-50 p-5'>
            <h1 className='display-5 text-center mb-5 text-danger'>TODO APP</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="What's the task today?" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-success" type="submit" id="btnAdd">Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default TodoAddForm