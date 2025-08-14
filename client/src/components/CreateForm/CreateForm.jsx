import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "../Form/Form";

export default function CreateForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      }
    );
    if (response.ok) {
      navigate("/");
    }
  };

  return (<Form nameValue={name} emailValue={email} setName={setName} setEmail={setEmail} handleSubmit={handleSubmit} /> );
}
