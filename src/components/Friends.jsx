function Friends({ friends, selectFriend, selectedFriend }) {
  const isSelected = selectedFriend && selectedFriend.id === friends.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friends.image} alt="friends" />
      <h3>{friends.name}</h3>
      {friends.balance < 0 && (
        <p className="red">
          You Owe {friends.name} {Math.abs(friends.balance)}{" "}
        </p>
      )}
      {friends.balance > 0 && (
        <p className="green">
          {friends.name} owes you {Math.abs(friends.balance)}{" "}
        </p>
      )}
      {friends.balance === 0 && (
        <p className="">You and your friend {friends.name} are even</p>
      )}
      <button className="button" onClick={() => selectFriend(friends)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}
export default Friends;
