import { Col, Form, Row } from 'react-bootstrap'

function SkiHillFilters({
  search,
  setSearch,
  distanceMin,
  setDistanceMin,
  distanceMax,
  setDistanceMax,
  verticalMin,
  setVerticalMin,
  verticalMax,
  setVerticalMax,
  selectedTerrain,
  terrainOptions,
  toggleTerrain,
  sortBy,
  setSortBy,
}) {
  return (
    <Form className="filter-panel">
      <Row className="g-3 align-items-end">
        <Col xs={12} md={4} lg={3}>
          <Form.Group controlId="searchHill">
            <Form.Label>Search by hill name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type a hill name"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Form.Group controlId="distanceMin">
            <Form.Label>Min distance</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="1"
              value={distanceMin}
              onChange={event => setDistanceMin(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Form.Group controlId="distanceMax">
            <Form.Label>Max distance</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="1"
              value={distanceMax}
              onChange={event => setDistanceMax(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Form.Group controlId="verticalMin">
            <Form.Label>Min vertical</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="10"
              value={verticalMin}
              onChange={event => setVerticalMin(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Form.Group controlId="verticalMax">
            <Form.Label>Max vertical</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="10"
              value={verticalMax}
              onChange={event => setVerticalMax(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Form.Group controlId="sortBy">
            <Form.Label>Sort by</Form.Label>
            <Form.Select value={sortBy} onChange={event => setSortBy(event.target.value)}>
              <option value="distance-asc">Distance: near to far</option>
              <option value="distance-desc">Distance: far to near</option>
              <option value="vertical-desc">Vertical drop: high to low</option>
              <option value="vertical-asc">Vertical drop: low to high</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} lg={6}>
          <Form.Group controlId="terrainTypes">
            <Form.Label>Terrain types</Form.Label>
            <div className="terrain-checks">
              {terrainOptions.map(terrain => (
                <Form.Check
                  key={terrain}
                  type="checkbox"
                  id={`terrain-${terrain}`}
                  label={terrain}
                  checked={selectedTerrain.includes(terrain)}
                  onChange={() => toggleTerrain(terrain)}
                />
              ))}
            </div>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default SkiHillFilters
