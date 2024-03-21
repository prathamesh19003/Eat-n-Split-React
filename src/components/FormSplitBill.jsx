import { useState } from "react";
function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("you");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {selectedFriend.name}</h2>
      <label>💵Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>👨Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill
              ? setPaidByUser
              : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑{selectedFriend.name} Expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>Who is paying bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
}
export default FormSplitBill;
