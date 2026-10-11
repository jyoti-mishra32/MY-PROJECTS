import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name: {name}</p>
    </>
  );
}

export default ControlledComponent;