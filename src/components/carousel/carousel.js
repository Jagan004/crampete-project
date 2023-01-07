import Carousel from 'react-bootstrap/Carousel';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './carousel.css'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <Link to="/items?q=womens">
        <img
          className="d-block w-100 img-fluid"
          src="https://img.freepik.com/premium-psd/banner-template-online-fashion-sale_23-2148585403.jpg?w=2000"
          alt="First slide"
        />
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/items?q=mens">
        <img
          className="d-block w-100 img-fluid"
          src="https://img.freepik.com/free-psd/urban-fashion-banner-template_23-2148652498.jpg?w=2000"
          alt="Second slide"
          height="50%"
        />
          </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/items?q=electronics">
        <img
          className="d-block w-100 img-fluid"
          src="https://img.freepik.com/free-psd/technology-concept-banner-template_23-2148964338.jpg?w=2000"
          alt="Third slide"
        />
        </Link>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;