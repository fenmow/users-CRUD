import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UsersTable.scss";

export default function UsersTable() {
  async function loadData() {
    const data = await fetch(`${import.meta.env.VITE_API_URL}/api/users`).then(
      (res) => res.json()
    );
    setUsers(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const [users, setUsers] = useState(null);

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    window.location.reload();
  };

  return (
    <div className="table-container">
      <div className="link-container">
        <Link className="link" to={"/create"}>
          Create +
        </Link>
      </div>
      {!users ? (
        <h1>Sem usuário cadastrados</h1>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            {users?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/${user.id}`} className="btnLink">
                    <button id="readBtn" className="btn">
                      Read
                    </button>
                  </Link>
                  <Link to={`/update/${user.id}`} className="btnLink">
                    <button id="editBtn" className="btn">
                      Edit
                    </button>
                  </Link>
                  <button
                    id="deleteBtn"
                    className="btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
