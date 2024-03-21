import Friends from "./Friends";
function FriendList({ onSelection, friends, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          friends={friend}
          key={friend.id}
          selectFriend={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
export default FriendList;
