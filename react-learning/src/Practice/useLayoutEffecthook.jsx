import { useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const headingRef = useRef();

  useLayoutEffect(() => {
    console.log(headingRef.current.offsetHeight);
  }, []);

  return <h2 ref={headingRef}>Hello React</h2>;
}

export default UseLayoutEffect;