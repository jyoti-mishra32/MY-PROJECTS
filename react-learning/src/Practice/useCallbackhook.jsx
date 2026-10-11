import { useCallback, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const showMessage = useCallback(() => {
    console.log("Hello React");
  }, []);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={showMessage}>
        Show Message
      </button>
    </>
  );
}

export default UseCallback;