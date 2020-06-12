import React,{Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import lake from "../assets/lake.jpeg";
import dlake from"../assets/dlake.jpeg";
import {Container} from "react-bootstrap";

export default class CarouselBox extends Component {
    render() {
        return (
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-15"
                            src={lake}
                            alt="lakee"
                            height={400}
                        />
                        <Carousel.Caption>
                            <h3>Lake Image</h3>
                            <p>sdkjfhkshdfksj skjfhsjkfhksjfjk kjsfkjshfkjshdfkjh</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={dlake}
                            alt="lakee"
                            height={400}
                        />
                        <Carousel.Caption>
                            <h3>Lake Image</h3>
                            <p>sdkjfhkshdfksj skjfhsjkfhksjfjk kjsfkjshfkjshdfkjh</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={lake}
                            alt="lakee"
                            height={400}
                        />
                        <Carousel.Caption>
                            <h3>Lake Image</h3>
                            <p>sdkjfhkshdfksj skjfhsjkfhksjfjk kjsfkjshfkjshdfkjh</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container>
        );
    }

}