import { useNavigate } from "react-router-dom";
import "./CreateForm.scss";
import { useState } from "react";

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

  return (
    <div className="createFormContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          className="form"
          id="username"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="label">
          EMAIL
        </label>
        <input
          type="email"
          className="form"
          id="email"
          name="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit" className="submit_btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
