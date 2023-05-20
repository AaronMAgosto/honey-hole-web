import { Col, Container, Row } from "react-bootstrap";

export default function QuickFacts() {

  return (
  <section>
    <Container>
      <Row>

        <Col>
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src="" />
            <p class="title">Native Fish Species:</p>
            <p>Hover Over to Learn More!!</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Top 10 Most Prevalent Fish</h2>
            
            <p>
              
                Largemouth Bass,
                Bluegill,
                Black Crappie,
                Sunshine Bass,
                Channel Catfish,
                Redear Sunfish,
                Striped Bass,
                Spotted Sunfish,
                Warmouth,
                Bowfin,
              
            </p>
        </div>
    </div>
</div>
        </Col>

        <Col>
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">Conservation Tips</p>
            <p>Hover Over to Learn More!!</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Best Fishing Practices:</h2>
            <p>
              <ul>
                <li>Practice Catch and Release</li>
                <li>Follow Fishing Regulations</li>
                <li>Properly Dispose of Trash</li>
                <li>Respect Wildlife</li>
                <li>Use Barbless Hooks</li>
                <li>Handle Fish with Care</li>
                <li>Avoid Overfishing</li>
                <li>Prevent the Spread of Invasive Species</li>
                <li>Support Habitat Restoration</li>
                <li>Support Local Conservation Organizations</li>
              </ul>
            </p>
        </div>
    </div>
</div>
        </Col>

        <Col><div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">Fun Facts</p>
            <p>Hover Over to Learn More!!</p>
        </div>
        <div class="flip-card-back">
            <p class="title">A Couple Fun Facts for you</p>
            <p>
              <ul>
                <li>Florida is known as the "Fishing Capital of the World" due to its abundant and diverse fishing opportunities.</li>
                <li>Florida has over 7,700 lakes, providing ample opportunities for freshwater fishing.</li>
                <li>Lake Okeechobee, also known as the "Big O," is the largest freshwater lake in Florida and offers exceptional bass fishing opportunities.</li>
                <li>Florida is known for its extensive canal system, providing anglers with easily accessible freshwater fishing spots throughout the state.</li>
              </ul>
            </p>
        </div>
    </div>
</div>
        </Col>

      </Row>
    </Container>
  </section>
  )
}

