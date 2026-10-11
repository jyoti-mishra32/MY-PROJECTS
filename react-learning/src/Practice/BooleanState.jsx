import { useState } from "react";

function BooleanState() {
  const [show, setShow] = useState(false);

  return (
    <>
     <button onClick={() => setShow(!show)}>
      Show/Hide
     </button>

     {show && <h2>Hello Jyoti</h2>}
    </>
  );
}

export default BooleanState;