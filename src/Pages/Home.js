import React,{Component} from "react";
import CarouselBox from "../Components/CarouselBox";
import {Card,Container,CardDeck,Button} from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">our team</h2>
                    <CardDeck>
                        <Card bg="light">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                            <Card.Body>
                                <Card.Title>Ddevelopers</Card.Title>
                                <Card.Text>ahjbfhjbebjhbhjbljknjknj;i;ij;jnlijn;j;n</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card >
                        <Card bg="light">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                            <Card.Body>
                                <Card.Title>Ddevelopers</Card.Title>
                                <Card.Text>ahjbfhjbebjhbhjbljknjknj;i;ij;jnlijn;j;n</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card >
                        <Card bg="light">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                            <Card.Body>
                                <Card.Title>Ddevelopers</Card.Title>
                                <Card.Text>ahjbfhjbebjhbhjbljknjknj;i;ij;jnlijn;j;n</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </div>
        );

    }

}
