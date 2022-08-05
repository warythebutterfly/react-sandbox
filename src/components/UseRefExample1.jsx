import {useRef} from "react"

function UseRefExample1() {
    const inputRef = useRef();
    const paraRef = useRef()
    const onSubmit = e => {
        e.preventDefault();
        console.log(inputRef.current.value)
        inputRef.current.value = "hello"
        paraRef.current.innerText = "goodbye"
        

    }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={inputRef} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.value = paraRef.current.innerText} ref={paraRef}>Hello</p>
      </form>
    </div>
  );
}

export default UseRefExample1;
