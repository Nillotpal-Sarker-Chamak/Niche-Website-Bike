import { Carousel } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const TopBanner = () => {
  const { user } = useAuth();
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/XsF1kJ3/tb1.jpg"
            alt="First slide"
            height="400px"
          />
          <Carousel.Caption>
            <h3>See the Latest Collections</h3>
            <p>Choose the best bike available in Bangladesh</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/CBpk8f2/tb2.jpg"
            alt="Third slide"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Best Bike Colllection of Bangladesh</h3>
            <p>Limited stock. Buy one Quickly.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/jVBDVXM/tb3.jpg"
            alt="Third slide"
            height="400px"
          />

          <Carousel.Caption>
            <h3>The world is moving fast</h3>
            <p>Be fast with bikes</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default TopBanner;