import { useRef } from "react";

function FavoriteColor() {
  const inputRef = useRef(null);

function focusInput() {
  inputRef.current.focus();
}

  return (
    <div>
      <h1>Favorite color</h1>

      <input 
      ref={inputRef}
      placeholder="Enter your favorite color"
      />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FavoriteColor;