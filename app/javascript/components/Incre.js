import React, { useState, useEffect } from "react";

const Incre = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count: ${count}, 発火!`);

    return () => {
      console.log(`count: ${count}, クリーンアップ!`);
    };
  });

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Incre;
