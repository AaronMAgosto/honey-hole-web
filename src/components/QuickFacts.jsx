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
            <p class="title">Native Fish Species:</p>
            <p>Hover Over to Learn More!!</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Top 10 Most Prevalent Fish</h2>
            <p>
              <ul>
                <li>Largemouth Bass </li>
                <li>Bluegill</li>
                <li>Black Crappie</li>
                <li>Sunshine Bass</li>
                <li>Channel Catfish</li>
                <li>Redear Sunfish</li>
                <li>Striped Bass</li>
                <li>Spotted Sunfish</li>
                <li>Warmouth</li>
                <li>Bowfin</li>
              </ul>
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
            <p class="title">FLIP CARD</p>
            <p>Hover Over to Learn More!!</p>
        </div>
        <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>
        </Col>

      </Row>
    </Container>
  </section>
  )
}






// <section>
//   <Container fluid id="three-things" className="p-5">
//     <Row>
//       <Col><h2 className="text-center">Quick Facts 
//       <span>That bring pride to my mom.</span></h2></Col>
//     </Row>
    
//     <Row className="justify-content-center g-5">
//       <Col sm={8} lg={3}>
//         <p className="icon">🤗</p>
//         <h3 className="text-center">Collaborative <span className="d-md-block">Catalyst</span></h3>
//         <p className="text-center text-md-start">I am a team oriented player who brings professional expertise, positive attitude, and humor to keep our team energized, motivated, while delivering results.</p>
//       </Col>

//       <Col sm={8} lg={3}>
//         <p className="icon"><a href="https://system-overload-solution.web.app/" 
//           target="_blank" 
//           rel="noreferrer" 
//           className="easter-egg">🚀</a></p>
//         <h3 className="text-center">Rocket to<span className="d-md-block">The Moon</span></h3>
//         <p className="text-center text-md-start">With 20+ years in tech, I have found that motivating our team to excel is like launching a rocket ship - challenging, but incredibly rewarding!</p>
//       </Col>

//       <Col sm={8} lg={3}>            
//         <p className="icon easter-egg-2" 
//           >🥪</p>
//         <h3 className="text-center">Functionality <span className="d-md-block">+ Design</span></h3>
//         <p className="text-center text-md-start">Combining tech and design is my jam - like PB&J. I strive to create a seamless, irresistible experience for users whilst keeping things toasty and fresh.</p>
//       </Col>

//     </Row>
//   </Container>
// </section>