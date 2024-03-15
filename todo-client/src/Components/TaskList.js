import React, { useState } from 'react';

const Task = ({ task, onEdit, onDrop }) => {  //onEdit is used
    const [edit,setEdit] = useState({});

    //Whenever A task is marked as complete
    const handleComplete = () => {
        onEdit(task.id,task.title,true);        
    };

    //Whenever a task is dropped
    const handleDrop = () => {
        onDrop(task.id);
    };

    //When a reques to Edit a task to be made
    const doneEditing = (id,title) => {
        onEdit(id,title,false);
        setEdit({});
    }

    return (
        <div
            className={`fl ex items-center justify-between p-4 border-b border-gray-300 bg-gray-100`}
        >
            {edit.id===task.id?<input value={edit.title} onChange={(e)=>setEdit({...edit,title:e.target.value})}/>:
            <span style={task.completed ? { textDecoration: "line-through" } : {}}>{task.title}</span>
            }
            <div className="flex space-x-2">
                {!task.completed && <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={()=>{edit.id!==task.id?setEdit(task):doneEditing(edit.id,edit.title)}}
                >
                    {edit.id!==task.id?'Edit':'Done'}
                </button>}
                {!task.completed && <button
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={handleComplete}
                >
                    Complete
                </button>}
                <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={handleDrop}
                >
                    Drop
                </button>
            </div>

        </div>
    );
};



const TaskList = ({ tasks, onEdit, onDrop }) => {
    return (
        <div className="mt-4">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onEdit={onEdit}
                    onDrop={onDrop}
                />
            ))}
        </div>
    );
};
export default TaskList;  