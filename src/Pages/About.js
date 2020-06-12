import React,{Component} from "react";
import {Tab,Container,Nav,Row,Col,} from "react-bootstrap";

export default class About extends Component {
    render(){
        return(
           <Container>
               <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                   <Row>
                       <Col sm={3}>
                           <Nav variant="pills" className="flex-column mt-2">
                               <Nav.Item>
                                   <Nav.Link eventKey="first">Design</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="second">Team</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="third">Programming</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                               </Nav.Item>
                           </Nav>
                       </Col>
                       <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img height={500} src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                    <p>njjknjknks</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img height={500} src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                    <p></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img height={500} src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                    <p></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img height={500} src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                    <p></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img height={500} src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                    <p></p>
                                </Tab.Pane>
                            </Tab.Content>
                       </Col>

                   </Row>
               </Tab.Container>
           </Container>

        )
    }
}