import { Container, Row } from 'react-bootstrap'
import SkiHillCard from '../components/SkiHillCard'

const skiHills = [
  {
    id: 1,
    name: "Devil's Head",
    distance: "45 miles",
    verticalDrop: "500 ft",
    terrain: "Beginner, Intermediate, Advanced",
    description: "Placeholder description for Devil's Head ski resort."
  },
  {
    id: 2,
    name: "Cascade Mountain",
    distance: "35 miles",
    verticalDrop: "460 ft",
    terrain: "Beginner, Intermediate",
    description: "Placeholder description for Cascade Mountain."
  },
  {
    id: 3,
    name: "Granite Peak",
    distance: "130 miles",
    verticalDrop: "700 ft",
    terrain: "Intermediate, Advanced, Expert",
    description: "Placeholder description for Granite Peak."
  },
  {
    id: 4,
    name: "Tyrol Basin",
    distance: "25 miles",
    verticalDrop: "300 ft",
    terrain: "Beginner, Intermediate",
    description: "Placeholder description for Tyrol Basin."
  }
]

function SkiHillsPage() {
  return (
    <Container style={{ padding: '40px 0' }}>
      <h1>Ski Hills</h1>
      <Row>
        {skiHills.map(hill => (
          <SkiHillCard key={hill.id} hill={hill} />
        ))}
      </Row>
    </Container>
  )
}

export default SkiHillsPage