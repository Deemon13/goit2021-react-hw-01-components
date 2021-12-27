import PropTypes from 'prop-types';

function StatisticsItem({ stat }) {
  const { label, percentage } = stat;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsItem;
