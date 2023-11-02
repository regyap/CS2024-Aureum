import "./Carousel.css";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const items = [
    {
      collection: "Wind Collection",
      name: "Halfeti",
      description:
        "So this is love. A mysterious and timeless perfume heady with rose, grapefruit and vine",
      volume: "100ML",
    },
    {
      collection: "Earth Collection",
      name: "Dirt",
      description:
        "So this is love. A mysterious and timeless perfume heady with rose, grapefruit and vine",
      volume: "100ML",
    },
    {
      collection: "Fire Collection",
      name: "Flame",
      description:
        "So this is love. A mysterious and timeless perfume heady with rose, grapefruit and vine",
      volume: "100ML",
    },
    {
      collection: "Water Collection",
      name: "Splash",
      description:
        "So this is love. A mysterious and timeless perfume heady with rose, grapefruit and vine",
      volume: "100ML",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [items.length]);

  const displayItems = [
    items[currentIndex % items.length],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
  ];

  return (
    <Container fluid className="carousel-container">
      <Row className="carousel-row">
        {displayItems.map((item, index) => (
          <Col key={index} xs={4} className="carousel-col">
            <CarouselItem data={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Carousel;
