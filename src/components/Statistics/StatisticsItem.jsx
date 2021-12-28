import PropTypes from 'prop-types';

import { StatisticStatsListItem, StatPercentage } from './Statistics.styled';

function StatisticsItem({ stat }) {
  const { label, percentage } = stat;
  return (
    <StatisticStatsListItem>
      <span className="label">{label}</span>
      <StatPercentage>{percentage} %</StatPercentage>
    </StatisticStatsListItem>
  );
}

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsItem;
