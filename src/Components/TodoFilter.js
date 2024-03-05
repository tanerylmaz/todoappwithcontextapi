import React, { useContext } from 'react';
import { TodoContext } from '../Context/TodoContext';

const TodoFilter = () => {
    const context = useContext(TodoContext);
    return (
        <div className='container-fluid d-flex justify-content-between p-2 mb-1 g-0 border rounded-1'>
            <div className='button-group'>
                <button onClick={() => { context.setFilterMode("all") }} className='btn btn-success btn-sm me-1'>All</button>
                <button onClick={() => { context.setFilterMode(false) }} className='btn btn-warning btn-sm me-1'>Pending</button>
                <button onClick={() => { context.setFilterMode(true) }} className='btn btn-info btn-sm'>Completed</button>
            </div>
            <button className="btn btn-danger btn-sm" type="button" id="btn-clear-all" onClick={() => { context.clearAll() }}>Clear All</button>

        </div>
    )
}

export default TodoFilter;