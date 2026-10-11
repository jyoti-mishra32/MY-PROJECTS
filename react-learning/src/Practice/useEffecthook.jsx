import { useEffect } from "react";

function UseEffect() {

  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return <h2>Hello React</h2>;
}

export default UseEffect;