function MapPin({
  hill,
  isActive,
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
      className={`ski-map-pin${isActive ? ' is-active' : ''}`}
      style={{
        position: 'absolute',
        top: hill.mapPosition.top,
        left: hill.mapPosition.left,
        transform: 'translate(-34%, -100%)',
        display: 'inline-flex',
        alignItems: 'flex-end',
        gap: '0.55rem',
        padding: 0,
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        zIndex: 3,
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
        style={{
          display: 'block',
          width: '30px',
          height: '30px',
          objectFit: 'contain',
          filter: isActive
            ? 'drop-shadow(0 14px 20px rgba(13, 110, 253, 0.28))'
            : 'drop-shadow(0 10px 16px rgba(11, 27, 43, 0.22))',
          transform: isActive ? 'scale(1.12)' : 'scale(1)',
          transformOrigin: 'bottom center',
        }}
      />
      {isActive ? <span className="ski-map-pin-label">{hill.name}</span> : null}
    </button>
  )
}

export default MapPin
