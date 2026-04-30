import { useState } from 'react'
import { Badge, Col, Card, Button } from 'react-bootstrap'

function SkiHillCard({ hill }) {
  const [showMore, setShowMore] = useState(false)
  const [imageVisible, setImageVisible] = useState(Boolean(hill.imageFile))
  const imageSrc = hill.imageFile ? `${import.meta.env.BASE_URL}ski-hills/${hill.imageFile}` : null

  return (
    <Col md={6} lg={3} className="mb-4">
      <Card className="h-100">
        {imageSrc && imageVisible ? (
          <Card.Img
            variant="top"
            src={imageSrc}
            alt={`${hill.name} ski hill`}
            className="ski-hill-card-image"
            onError={() => setImageVisible(false)}
          />
        ) : null}
        <Card.Body className="ski-hill-card-body">
          <Card.Title>
            <a href={hill.website} target="_blank" rel="noopener noreferrer">
              {hill.name}
            </a>
          </Card.Title>
          <div className="hill-card-metrics">
            <span><strong>{hill.distanceMiles}</strong> mi from Madison</span>
            <span><strong>{hill.verticalDropFt}</strong> ft vertical</span>
          </div>
          <div className="terrain-badges">
            {hill.terrainTypes.map(terrain => (
              <Badge bg="light" text="dark" key={terrain}>{terrain}</Badge>
            ))}
          </div>
          {showMore && <Card.Text>{hill.description}</Card.Text>}
          <Button className="mt-auto" variant="outline-primary" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SkiHillCard
