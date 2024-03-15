import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoApp from './Pages/TodoApp';
import MenuIcon from './Assets/MenuIcon';

//NavBar + Router in App Component
const App = () => {
  return (
    <Router>
      <>
      <div className="bg-gray-800">
        <nav className="flex items-center justify-between px-4 py-2 text-white">
          <div className="flex items-center">
            <span className="text-xl font-bold">Task Manager</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="px-3 py-2 hover:bg-gray-700 rounded"
              style={{ textDecoration: 'none' }}
            >
              Todo Page
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="block text-white hover:text-gray-300 focus:text-white focus:outline-none"
              type="button"
              aria-label="toggle menu"
            >
              <MenuIcon /> {/* Use the MenuIcon component */}
            </button>
          </div>
        </nav>
        <div className="md:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <div className="hidden bg-gray-800 md:flex md:items-center md:justify-between md:flex-grow">
            <Link
              to="/"
              className="block md:inline-block px-4 py-2 hover:bg-gray-700 rounded"
              style={{ textDecoration: 'none' }}
            >
              Todo Page
            </Link>
          </div>
        </div>
      </div>
      <Routes>
          <Route path="/" element={<TodoApp />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
