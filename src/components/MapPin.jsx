function MapPin({
  hill,
  isLocked,
  pinImage,
  onMouseEnter,
  onFocus,
  onBlur,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`ski-map-pin${isLocked ? ' is-active' : ''}`}
      style={{
        top: hill.mapPosition.top,
        left: hill.mapPosition.left,
      }}
      aria-pressed={isLocked}
      aria-label={`Show ${hill.name}`}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
    >
      <img
        src={pinImage}
        alt=""
        className="ski-map-pin-icon"
      />
    </button>
  )
}

export default MapPin
