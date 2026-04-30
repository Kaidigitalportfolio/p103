function StatsStrip({ stats }) {
  return (
    <div className="stats-strip">
      {stats.map(stat => (
        <div className="stat-item" key={stat.label}>
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

export default StatsStrip
