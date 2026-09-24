import { useState} from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
    <h1>Counter App</h1>
    
    <h2>{count}</h2>

    <div className="buttons">
    <button className="increase"
    onClick={() => setCount(count + 1)}>
      Increases
    </button>

    <button className="decrease"
    onClick={() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }}>
      Decreases
    </button>

    <button className="reset"
    onClick={() => setCount(0)}>
      Reset
    </button>
    </div>
    </div>
  );
}

export default App;
