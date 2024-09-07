import { useState } from "react";
const UseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={handleSub}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};
