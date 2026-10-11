import { useState } from "react";

function ArrayState() {
  const [items,setItems] = useState(["Apple", "Mango"]);

  return (
    <>
    <h2>{items.join(", ")}</h2>

    <button onClick={() => setItems([...items, "Banana"])}>
      Add Item
    </button>
    </>
  );
}

export default ArrayState;