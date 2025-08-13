import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UsersTable.scss";

export default function UsersTable() {
  async function loadData() {
    const data = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users`
    ).then((res) => res.json());
    setUsers(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const [users, setUsers] = useState(null);

  return (
    <div className="table-container">
      <div className="link-container">
        <Link className="link" to={"/create"}>
          Create +
        </Link>
      </div>
      {!users ? <h1>Sem usuário cadastrados</h1> : <h1>teste</h1>}
    </div>
  );
}
