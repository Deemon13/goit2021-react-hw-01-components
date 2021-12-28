import PropTypes from 'prop-types';

import {
  Friend,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

function FriendListItem({ friend }) {
  const { isOnline, avatar, name } = friend;
  return (
    <Friend isOnline={isOnline}>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar isOnline={isOnline} src={avatar} alt={name} width="48" />
      <FriendName isOnline={isOnline}>{name}</FriendName>
    </Friend>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendListItem;
