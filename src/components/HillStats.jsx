function HillStats({ hills }) {
  if (hills.length === 0) {
    return (
      <div className="hill-stats">
        <div className="hill-stat">
          <span className="hill-stat-value">0</span>
          <span className="hill-stat-label">matching hills</span>
        </div>
      </div>
    )
  }

  const nearestHill = hills.reduce((nearest, hill) => {
    return hill.distanceMiles < nearest.distanceMiles ? hill : nearest
  }, hills[0])

  const tallestHill = hills.reduce((tallest, hill) => {
    return hill.verticalDropFt > tallest.verticalDropFt ? hill : tallest
  }, hills[0])

  return (
    <div className="hill-stats">
      <div className="hill-stat">
        <span className="hill-stat-value">{hills.length}</span>
        <span className="hill-stat-label">matching hills</span>
      </div>
      <div className="hill-stat">
        <span className="hill-stat-value">{nearestHill.distanceMiles} mi</span>
        <span className="hill-stat-label">nearest: {nearestHill.name}</span>
      </div>
      <div className="hill-stat">
        <span className="hill-stat-value">{tallestHill.verticalDropFt} ft</span>
        <span className="hill-stat-label">most vertical: {tallestHill.name}</span>
      </div>
    </div>
  )
}

export default HillStats
