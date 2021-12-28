import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import { FriendListWrapper } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FriendListWrapper>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendListWrapper>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
