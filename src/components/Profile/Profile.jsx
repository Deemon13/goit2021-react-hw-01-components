import PropTypes from 'prop-types';

import {
  ProfileWrapper,
  ProfileDescr,
  ProfileAvatar,
  ProfileName,
  ProfileNickName,
  ProfileLocation,
  StatsList,
  StatsItem,
  StatName,
  StatValue,
} from './Profile.styled';

function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileWrapper>
      <ProfileDescr>
        <ProfileAvatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileNickName>@{tag}</ProfileNickName>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>

      <StatsList>
        <StatsItem>
          <StatName>Followers</StatName>
          <StatValue>{followers}</StatValue>
        </StatsItem>
        <StatsItem>
          <StatName>Views</StatName>
          <StatValue>{views}</StatValue>
        </StatsItem>
        <StatsItem>
          <StatName>Likes</StatName>
          <StatValue>{likes}</StatValue>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
}

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
