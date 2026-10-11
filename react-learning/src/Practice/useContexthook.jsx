import { createContext, useContext } from "react";

const NameContext = createContext();

function Child() {
  const name = useContext(NameContext);

  return <h2>My name is {name}</h2>;
}

function UseContext() {
  return (
    <NameContext.Provider value="Jyoti">
      <Child />
    </NameContext.Provider>
  );
}

export default UseContext;