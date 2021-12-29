import styled from '@emotion/styled';

const StatisticsSection = styled.section`
  margin: 0 auto 10px;
  padding-top: 10px;
  text-align: center;
  max-width: 320px;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
`;

const StatisticsTitle = styled.h2`
  padding-bottom: 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 1.8rem;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
`;

const StatisticStatsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 30px 10px;
`;

const StatisticStatsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: 400;

  :not(:last-child) {
    border-bottom: 1px dashed ${({ theme }) => theme.colors.mainColor};
    padding-bottom: 6px;
  }

  :not(:first-of-type) {
    padding-top: 6px;
  }
`;

const StatPercentage = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: 500;
`;

export {
  StatisticsSection,
  StatisticsTitle,
  StatisticStatsList,
  StatisticStatsListItem,
  StatPercentage,
};
