import { useEffect, useState } from "react";

export default function UsersTable() {
  async function loadData() {
    const data = await fetch(import.meta.env.REACT_APP_APIURL).then((res) =>
      res.json()
    );
    setUsers(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const [users, setUsers] = useState(null);

  return (
    <>
      {users ? (<h1>teste</h1>) : (<h1>Sem usuário cadastrados</h1>)}
    </>
  );
}
