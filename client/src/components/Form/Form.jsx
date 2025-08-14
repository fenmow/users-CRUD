import "./Form.scss";

export default function Form({ nameValue, emailValue, setName, setEmail, handleSubmit }) {
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
          value={nameValue}
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
          value={emailValue}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit" className="submit_btn">
          SUBMIT
        </button>
      </form>
    </div>
  )
}