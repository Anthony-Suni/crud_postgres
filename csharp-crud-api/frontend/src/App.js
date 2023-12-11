import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Cambiado de Switch a Routes
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  return (
    <Router>
      <Routes>  {/* Cambiado de Switch a Routes */}
        <Route path="/users" element={<UserList />} />
        <Route path="/users/add" element={<UserForm />} />
        <Route path="/users/edit/:id" element={<UserForm />} />
      </Routes>  {/* Cambiado de Switch a Routes */}
    </Router>
  );
}

export default App;
