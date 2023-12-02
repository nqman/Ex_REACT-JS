import React from "react";

export default function ListUser({ users, handleDeleteUser, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="bg-dark text-light">Mã SV</th>
          <th className="bg-dark text-light">Name</th>
          <th className="bg-dark text-light">Account</th>
          <th className="bg-dark text-light">Password</th>
          <th className="bg-dark text-light">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.code}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>

            <button
              className="btn btn-warning me-2"
              onClick={() => onEdit(user.id)}
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="btn btn-danger"
            >
              X
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
