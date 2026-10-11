import { useState } from "react";

function InputHandling() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>{name}</h2>
    </>
  );
}

export default InputHandling;