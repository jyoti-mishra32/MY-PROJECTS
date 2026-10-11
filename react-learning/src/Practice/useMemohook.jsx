import { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <h2>Double: {double}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default UseMemo;