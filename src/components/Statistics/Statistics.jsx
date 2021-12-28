import PropTypes from 'prop-types';

import StatisticsItem from './StatisticsItem';

import {
  StatisticsSection,
  StatisticsTitle,
  StatisticStatsList,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticStatsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id} stat={stat} />
        ))}
      </StatisticStatsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
