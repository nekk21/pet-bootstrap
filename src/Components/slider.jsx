import React from 'react';
import { Carousel } from 'react-bootstrap';
import kosmos from '../kosmos.jpg' 


function Slider(){
    return(
        <Carousel>
            <Carousel.Item style= {{height: "930px"}}>
                <img className="d-block w-100" src={kosmos} alt="Firs" />

                <Carousel.Caption>
                    <h3>Nekk Blog</h3>
                    <p>Slide </p>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item style= {{height: "930px"}}>
                <img className="d-block w-100" src={kosmos} alt="Firs" />

                <Carousel.Caption>
                    <h3>Alina Blog</h3>
                    <p>slide 2 </p>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item style= {{height: "930px"}}>
                <img className="d-block w-100" src={kosmos} alt="Firs" />

                <Carousel.Caption>
                    <h3>Pet Blog</h3>
                    <p>slide 3</p>
                </Carousel.Caption>
                
            </Carousel.Item>
        </Carousel>
        
    )}

export default Slider;
