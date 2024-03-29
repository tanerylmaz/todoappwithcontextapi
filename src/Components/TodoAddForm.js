import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context/TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const TodoAddForm = () => {
    const ctx = useContext(TodoContext);
    const [desc, setDesc] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (desc) {
            ctx.addTask(desc);
            setDesc("");
            e.target.firstChild.firstChild.focus();
        }
        else {
            alert("Lütfen alanı boş bırakmayınız...")
        }
    };
    return (
        <div className='container-fluid g-0'>
            <h1 className='display-5 text-center mb-5 text-danger'>TODO APP</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input onChange={(e) => { setDesc(e.target.value) }} value={desc} type="text" className="form-control" placeholder="What's the task today?" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-success" type="submit" id="btnAdd">
                        <FontAwesomeIcon icon={faCirclePlus} size='xl' />
                    </button>

                </div>
            </form>
        </div>
    )
}

export default TodoAddForm