import { useState } from 'react'
import { Col, Card, Button } from 'react-bootstrap'

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
        <Card.Body>
          <Card.Title>
            <a href={hill.website} target="_blank" rel="noopener noreferrer">
              {hill.name}
            </a>
          </Card.Title>
          <Card.Text>
            <strong>Distance from Madison:</strong> {hill.distanceMiles} miles<br />
            <strong>Vertical Drop:</strong> {hill.verticalDropFt} ft<br />
            <strong>Terrain:</strong> {hill.terrainTypes.join(', ')}
          </Card.Text>
          {showMore && <Card.Text>{hill.description}</Card.Text>}
          <Button variant="outline-primary" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SkiHillCard
