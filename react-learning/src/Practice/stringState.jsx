import { useState } from "react";

function StringState() {
  const [name, setName] = useState("Jyoti");

  return (
    <div>
      <h1>Hello {name}</h1>

      <button onClick={() => setName("Anjali")}>
        Change Name
      </button>
    </div>
  );
}

export default StringState;