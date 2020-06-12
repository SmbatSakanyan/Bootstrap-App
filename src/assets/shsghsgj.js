import {Button, Col, Container, Form, Nav, Row, Tab} from "react-bootstrap";
import React from "react";

<Container>
    <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column mt-2">
                    <Nav.Item>
                        <Nav.Link eventkey="first">Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey="second">Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey="third">Programming</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey="fourth">Frameworks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey="fifth">Libraries</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Contetnt>
                    <Tab.Pane eventKey="first">
                        <img src="https://images.adsttc.com/media/images/5e60/ff7b/6ee6/7e8c/e100/00a9/newsletter/%E5%AE%A2%E5%8E%85_(3).jpg?1583415154" alt="Deaign"/>
                        <p>Substantial disagreement exists concerning how designers in many fields, whether amateur or professional,
                            alone or in teams, produce designs. Kees Dorst and Judith Dijkhuis, both designers themselves,
                            0argued that "there are many ways of describing design processes" and discussed "two basic and fundamentally different ways",
                            0[2] both of which have several names.
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <img src="https://www.sngular.com/wp-content/uploads/2019/04/homepage-desktop@3x-1200x486.jpg" alt="team"/>
                        <p>
                            Substantial disagreement exists concerning how designers in many fields, whether amateur or professional,
                            alone or in teams, produce designs. Kees Dorst and Judith Dijkhuis, both designers themselves,
                            0argued that "there are many ways of describing design processes" and discussed "two basic and fundamentally different ways",
                            0[2] both of which have several names.
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <img src="https://www.collegechoice.net/wp-content/uploads/2018/04/Computer-Programming-654x427.jpg" alt="Programming"/>
                        <p>
                            Substantial disagreement exists concerning how designers in many fields, whether amateur or professional,
                            alone or in teams, produce designs. Kees Dorst and Judith Dijkhuis, both designers themselves,
                            0argued that "there are many ways of describing design processes" and discussed "two basic and fundamentally different ways",
                            0[2] both of which have several names.
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                        <img src="https://images.idgesg.net/images/article/2019/10/abstract_programming_code_java_by_monsitj_gettyimages-1167484258_2400x1600-100813550-large.jpg" alt="framework"/>
                        <p>
                            Substantial disagreement exists concerning how designers in many fields, whether amateur or professional,
                            alone or in teams, produce designs. Kees Dorst and Judith Dijkhuis, both designers themselves,
                            0argued that "there are many ways of describing design processes" and discussed "two basic and fundamentally different ways",
                            0[2] both of which have several names.
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                        <img src="https://www.jrebel.com/sites/rebel/files/image/2019-11/image-blog-best-javafx-libraries-for-beautiful-apps-and-clean-code.jpg" alt=""libraries/>
                        <p>
                            Substantial disagreement exists concerning how designers in many fields, whether amateur or professional,
                            alone or in teams, produce designs. Kees Dorst and Judith Dijkhuis, both designers themselves,
                            0argued that "there are many ways of describing design processes" and discussed "two basic and fundamentally different ways",
                            0[2] both of which have several names.
                        </p>
                    </Tab.Pane>

                </Tab.Contetnt>
            </Col>
        </Row>
    </Tab.Container>
</Container>
