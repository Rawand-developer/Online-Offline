import { useState, useEffect } from "react";

const useMouseCoords = () => {

  const [coords, setCoords] = useState([0,0]);

  useEffect(() => {
    const handleCoords = ({ clientX, clientY }) => {
      setCoords([clientX, clientY]);
    }

    window.addEventListener("mousemove", handleCoords);

    return () => {
      window.removeEventListener("mousemove", handleCoords);
    }

  }, []);

  return coords;
}

export default useMouseCoords;