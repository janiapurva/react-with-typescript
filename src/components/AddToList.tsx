import { useState } from "react";

const AddToList = () => {
const [input, setInput] = useState({
  name: "",
  age: "",
  note:"",
  img:""
});

const handleChange = (e) => {
setInput({
  ...input,
  [e.target.name]: e.target.value
})
}

  return (
    <div className="AddToList">
      <input type="text" placeholder="Name" className="AddToList-input" value={input.name}  onChange={handleChange} name="name"/>
      <input type="text" placeholder="Age" className="AddToList-input" value={input.age} onChange={handleChange} name="age"/>
      <input type="text" placeholder="Image Url" className="AddToList-input" value={input.img} onChange={handleChange} name="img"/>
      <input type="text" placeholder="Notes" className="AddToList-input" value={input.note}  name="note" />
    </div>
  );
};

export default AddToList;
