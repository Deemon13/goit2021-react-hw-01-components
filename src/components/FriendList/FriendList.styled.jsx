import styled from '@emotion/styled';

const FriendListWrapper = styled.ul`
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
  max-width: 320px;
  border: 1px solid rgb(0, 255, 0);
  border-radius: 12px;

  background-color: grey;
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
`;

const Friend = styled.li`
  max-width: 280px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid
    ${props => (props.isOnline ? 'rgb(0,255,0)' : 'rgb(255,0,0)')};
  border-radius: 12px;

  background-color: lightgrey;
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);

  :not(:last-child) {
    margin-bottom: 6px;
  }
`;

const FriendStatus = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? 'darkgreen' : 'rgb(255,0,0)')};
`;

const FriendAvatar = styled.img`
  margin-right: 30px;
  border: 1px solid
    ${props => (props.isOnline ? 'rgb(0,255,0)' : 'rgb(255,0,0)')};
  border-radius: 12px;
  padding: 2px;
  width: 60px;

  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
`;

const FriendName = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${props => (props.isOnline ? 'darkgreen' : 'rgb(255,0,0)')};
  font-weight: 500;
`;

export { FriendListWrapper, Friend, FriendStatus, FriendAvatar, FriendName };
