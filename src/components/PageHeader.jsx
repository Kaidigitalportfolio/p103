function PageHeader({ eyebrow, title, description, actions, align = 'start' }) {
  return (
    <header className={`page-header page-header-${align}`}>
      {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {description ? <p className="page-description">{description}</p> : null}
      {actions ? <div className="page-actions">{actions}</div> : null}
    </header>
  )
}

export default PageHeader
