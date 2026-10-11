import { useState } from "react";

function MultipleState() {
  const [name,setName] = useState("Jyoti");
  const [age,setAge] = useState(21);

  return (
    <>
    <h2>{name}</h2>
    <p>Age: {age}</p>

    <button onClick={() => setAge(22)}>
      Change Age
    </button>
    </>
  );
}

export default MultipleState;