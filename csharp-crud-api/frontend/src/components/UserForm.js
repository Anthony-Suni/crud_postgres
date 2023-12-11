import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí deberías enviar la solicitud POST o PUT a tu API para agregar o editar un usuario
    console.log('Submitting user:', name);
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
