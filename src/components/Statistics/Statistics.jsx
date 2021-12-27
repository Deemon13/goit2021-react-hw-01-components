import StatisticsItem from './StatisticsItem';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <StatisticsItem key={stat.id} stat={stat} />
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
