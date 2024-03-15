import React, { useState } from 'react';

const Task = ({ task, onComplete, onDrop }) => {
    const [edit,setEdit] = useState({});

    const handleComplete = () => {
        onComplete(task.id,task.title,true);
        
    };

    const handleDrop = () => {
        onDrop(task.id);
    };
    const doneEditing = (id,title) => {
        onComplete(id,title,false);
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



const TaskList = ({ tasks, onComplete, onDrop }) => {
    return (
        <div className="mt-4">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onComplete={onComplete}
                    onDrop={onDrop}
                />
            ))}
        </div>
    );
};
export default TaskList;  