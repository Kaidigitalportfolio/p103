import { Button, Card } from 'react-bootstrap'

function SkiMapDetailsCard({ hill }) {
  return (
    <Card className="ski-map-card shadow-sm">
      <Card.Body>
        {hill ? (
          <>
            <p className="ski-map-card-label">Selected location</p>
            <Card.Title as="h2">{hill.name}</Card.Title>
            <Card.Text>{hill.description}</Card.Text>
            <Card.Text>
              <strong>Distance from Madison:</strong> {hill.distanceMiles} miles
              <br />
              <strong>Vertical drop:</strong> {hill.verticalDropFt} ft
              <br />
              <strong>Terrain:</strong> {hill.terrainTypes.join(', ')}
            </Card.Text>
            <Button href={hill.website} target="_blank" rel="noopener noreferrer" variant="primary">
              Visit Website
            </Button>
          </>
        ) : (
          <>
            <p className="ski-map-card-label">No location selected</p>
            <Card.Title as="h2">Choose a pin</Card.Title>
            <Card.Text>Hover over a Wisconsin location pin or click one to lock its details in place.</Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default SkiMapDetailsCard
