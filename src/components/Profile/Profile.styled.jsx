import styled from '@emotion/styled';

const ProfileWrapper = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
  max-width: 320px;
  border: 1px solid rgb(0, 255, 0);
  border-radius: 12px;

  background-color: grey;
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
`;

const ProfileDescr = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(0, 255, 0);
`;

const ProfileAvatar = styled.img`
  display: inline-block;
  margin-bottom: 6px;
  max-width: 40%;
  background-color: darkgreen;
  border: 1px solid rgb(0, 255, 0);
  border-radius: 50%;
`;

const ProfileName = styled.p`
  margin-bottom: 6px;
  text-transform: uppercase;
  color: rgb(0, 255, 0);
  font-size: 1.8rem;
  font-weight: 500;
`;

const ProfileNickName = styled.p`
  margin-bottom: 6px;
  color: darkgreen;
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 500;
`;

const ProfileLocation = styled.p`
  color: rgb(0, 255, 0);
  font-size: 1.2rem;
  font-weight: 400;
`;

const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  flex-basis: calc((100% - 30px) / 3);

  :not(:last-child) {
    border-right: 1px solid rgb(0, 255, 0);
  }
`;

const StatName = styled.span`
  font-size: 1.2rem;
  color: darkgreen;
  font-weight: 400;
`;

const StatValue = styled.span`
  font-size: 1.2rem;
  color: rgb(0, 255, 0);
  font-weight: 500;
`;

export {
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
};
