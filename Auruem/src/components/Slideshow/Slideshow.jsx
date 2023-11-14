import { useState, useEffect } from "react";
import dummy from "../../assets/slideshow-1.jpg";
import dummy2 from "../../assets/slideshow-2.jpg";
import dummy3 from "../../assets/slideshow-3.jpg";
import "./Slideshow.css";

const images = [dummy, dummy2, dummy3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <img
      src={images[currentIndex]}
      alt={`Image ${currentIndex + 1}`}
      className="slide-img"
    />
  );
};

export default Slideshow;
