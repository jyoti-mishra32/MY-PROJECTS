import { useState } from "react";

function ChangeEvent() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </>
  );
}

export default ChangeEvent;