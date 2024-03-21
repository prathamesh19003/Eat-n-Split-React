import { useState } from "react";
function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();
  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = { id, name, image: `${image}=${id}`, balance: 0 };
    onAdd(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑FriendName</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📷Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <button className="button">Add</button>
    </form>
  );
}
export default Form;
