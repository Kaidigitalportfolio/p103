function PageIntro({ title, description, align = 'start', children }) {
  return (
    <div className={`page-intro page-intro-${align}`}>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
      {children ? <div className="page-intro-actions">{children}</div> : null}
    </div>
  )
}

export default PageIntro
