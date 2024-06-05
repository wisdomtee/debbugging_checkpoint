import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import AnotherComponent from './AnotherComponent';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Sample React App</h1>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <ChildComponent count={count} />
      <AnotherComponent />
    </div>
  );
}

export default App;
