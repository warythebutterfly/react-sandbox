import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);

  const renders = useRef(1);

  //const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);
  useEffect(() => {
    renders.current++;
  });
  const onClick = () => {
    setIncrement((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        className="form-control w-25"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>
        The sqrt of {number} is {sqrt}
      </h2>
      <button className="btn btn-primary" onClick={onClick}>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSqrt(n) {
  for (let index = 0; index < 10000; index++) {
    console.log(index);
  }

  return Math.sqrt(n);
}

export default UseMemoExample;
