
import React from "react";
import ItemFriend from "./itemfriend/ItemFriend";
import propTypes from 'prop-types';
import css from './friends.module.css';


function Friends(props) {
    const listFriends = props.friends;

  return (

  <ul className={css.friendlist}>
    {listFriends.map((friend)=> (
    <ItemFriend key={friend.id}
    isOnline={friend.isOnline}
    avatar={friend.avatar}
    name={friend.name}
    
    />))}
</ul>

    )  
}

Friends.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Friends;