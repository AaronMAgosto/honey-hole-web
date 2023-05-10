import { Container, Row } from "react-bootstrap";
import Panel from "./Panel.jsx";
import data from "./data.json"

export default function List() {
  return(
    <>
    <Container>
      <Row>{
        data.map(
          (element) => (
            element
           ? <Panel key={element.id} data={element} />
           : <p>loading</p>
          )
        )
        }
      </Row>
      </Container>
      </>
  )
}