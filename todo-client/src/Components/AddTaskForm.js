import React, { useState } from 'react';


const AddTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!title.trim()) return;
      try {
        const response = await fetch('http://localhost:3000/api/addtask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title }),
        });
        let newTask =response.json();
        if (response.ok) {
          onAddTask();
          setTitle('');
        } else {
          console.error('Failed to add task:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to add task:', error);
      }
    };
  
    return (
    <div className='mx-auto'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded p-2 mr-2 max-w-lg"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
      </div>
    );
  };
  export default AddTaskForm;