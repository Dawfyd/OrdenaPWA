import React, { useState } from "react";

export default function NameForm(props) {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <textarea
          className="text_area"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input className="submit_text" type="submit" value="Enviar" />
    </form>
  );
}
