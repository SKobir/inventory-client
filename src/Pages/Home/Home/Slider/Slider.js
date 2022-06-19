import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Slider = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/7KvJmKC/gsxr.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ZfdXDNG/bajaj-150.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6RfRkh5/4V.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/DCyWg9L/pulsarNs.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/MCBSTSr/R15-V3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ydNzkNF/repsol.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;