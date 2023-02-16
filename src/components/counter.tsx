import { useState } from "react";
import classNames from "./counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button
        className={classNames.btn}
        onClick={setCount.bind(null, count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
