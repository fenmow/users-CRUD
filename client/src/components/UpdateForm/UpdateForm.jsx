import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "../Form/Form";

export default function UpdateForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function loadData() {
      await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
          setEmail(data.email);
        });
    }

    loadData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <Form
      nameValue={name}
      emailValue={email}
      setName={setName}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
    />
  );
}
