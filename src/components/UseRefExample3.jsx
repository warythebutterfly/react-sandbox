import Todo from "./Todo";
import { useState } from "react";

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);
  return <div>{showTodo && <Todo />}
  <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Toggle todo</button></div>;
}

export default UseRefExample3;
