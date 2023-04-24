import React from 'react';
import propTypes from 'prop-types';
import Status from '../status/Status';
import css from '../friends.module.css';
 

function ItemFriend(props) {
  const { id, isOnline, avatar, name } = props;

  return (
    <li className={css.item} key={id}>
      <Status statusIsOnline={isOnline} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
      
    </li>
  );
}

ItemFriend.propTypes = {
  id: propTypes.number,
  isOnline: propTypes.bool.isRequired,
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
};

export default ItemFriend;
