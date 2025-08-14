import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserInfo() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
      async function loadData() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users/${id}`
    ).then((res) => res.json());

    setUser(response);
  }
    loadData();
  }, [id]);

  return (
    <div className="table-container">
    <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
              <tr>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <Link to={`/`} className="btnLink">
                    <button id="readBtn" className="btn">
                      Back
                    </button>
                  </Link>
                </td>
              </tr>
          </tbody>
        </table>
        </div>
  )
}
