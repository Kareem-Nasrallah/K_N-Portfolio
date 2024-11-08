import { useRef, useEffect, useState } from "react";

const CanvasMyPhoto = () => {
  const [shadowHoverColor, setShadowColor] = useState("");
  const canvasRef = useRef(null);

  // Function to update shadow color based on dark mode
  const updateShadowColor = () => {
    const body = document.body;
    const colorProperty = body.classList.contains("dark")
      ? "--text-color"
      : "--hover-color";
    setShadowColor(
      getComputedStyle(body).getPropertyValue(colorProperty).trim()
    );
  };

  // Function to clear and redraw the image with shadow effect
  const drawImageWithShadow = (context, img) => {
    const canvas = canvasRef.current;
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.shadowColor = shadowHoverColor;
    context.shadowBlur = 40;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = -10;

    context.drawImage(img, 15, 45);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Load the image and draw it when loaded
    const img = new Image();
    img.src = "/me/formal black 2.png";

    img.onload = () => {
      drawImageWithShadow(context, img);
    };

    // Observe changes to the "dark" class on the body to update the shadow color
    const observer = new MutationObserver(updateShadowColor);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial shadow color setup
    updateShadowColor();

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, [shadowHoverColor]);

  return (
    <canvas
      ref={canvasRef}
      id="canv"
      className="myPhotos"
      width="320px"
      height="500px"
    ></canvas>
  );
};

export default CanvasMyPhoto;
