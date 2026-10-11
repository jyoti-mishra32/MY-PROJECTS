import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>My favorite color is {color}!</h1>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("pink")}>
        Pink
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>
    </div>
  );
}

export default FavoriteColor;