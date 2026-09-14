import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/FULL_5bf504de-daf9-44f6-b6e6-5a0661a2745f.jpg'
import { Container } from 'react-bootstrap';
function Slider() {
  return (
    <Container>
   
      <Carousel >
      
        <Carousel.Item>
        <img src={image} width="100%"/>
        </Carousel.Item>
     
      <Carousel.Item>
        <img src={image} width="100%" />
        </Carousel.Item>
     
     <Carousel.Item>
        <img src={image} width="100%"/>
        </Carousel.Item>
     
      
    </Carousel>

    </Container>
  );
}

export default Slider;