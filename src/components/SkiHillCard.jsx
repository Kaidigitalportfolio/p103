import { useState } from 'react'
import { Col, Card, Button } from 'react-bootstrap'

function SkiHillCard({ hill }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <Col md={6} lg={3} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{hill.name}</Card.Title>
          <Card.Text>
            <strong>Distance from Madison:</strong> {hill.distance}<br />
            <strong>Vertical Drop:</strong> {hill.verticalDrop}<br />
            <strong>Terrain:</strong> {hill.terrain}
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