import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import video1 from "../../images/video1.mp4";
import video2 from "../../images/video2.mp4";

function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <video width={"75%"} height={"100%"} autoPlay loop muted>
          <source src={video2} />
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video width={"75%"} height={"100%"} autoPlay loop muted>
          <source src={video1} />
        </video>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
