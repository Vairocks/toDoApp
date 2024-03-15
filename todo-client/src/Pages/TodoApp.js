import React, { useState, useEffect } from 'react';
import TaskList from '../Components/TaskList';
import AddTaskForm from '../Components/AddTaskForm';


const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/gettasklist');
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        console.error('Failed to fetch tasks:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {
    fetchTasks();
  };

  const editTask = async (id,title,completed) => {
    try {
      const response = await fetch(`http://localhost:3000/api/edittask/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({ id,title,completed }) // Send the updated data
      });
      if (response.ok) {
        fetchTasks();
      } else {
        console.error('Failed to complete task:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to complete task:', error);
    }
  };
  const dropTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/droptask/${taskId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setTasks(tasks.filter((task) => task.id !== taskId));
      } else {
        console.error('Failed to drop task:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to drop task:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onComplete={editTask} onDrop={dropTask} />
    </div>
  );
};

export default TodoApp;