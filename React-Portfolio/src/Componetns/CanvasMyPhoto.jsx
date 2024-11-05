import {useRef, useEffect} from "react"

const CanvasMyPhoto = () => {
    const canvasRef = useRef(null)
    let shadowHoverColor = '';
    
  // Function to update shadow color based on dark mode
  const changeBgImg = () => {
    const body = document.body;
    if (body.classList.contains("dark")) {
      shadowHoverColor = getComputedStyle(body).getPropertyValue("--text-color").trim();
    } else {
      shadowHoverColor = getComputedStyle(body).getPropertyValue("--hover-color").trim();
    }
    return shadowHoverColor;
  };

  // Function to clear and redraw the image with shadow effect
  const drawImgAgain = (context, img)=>{
    const canvas = canvasRef.current;
    
    context.clearRect(0,0, canvas.width, canvas.height);

    changeBgImg();
    context.shadowColor = shadowHoverColor;
    context.shadowBlur = 40;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = -10;

    context.drawImage(img, 15, 45);
  }

  useEffect(() =>{
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")

    // Load the image and draw it when loaded
    const img = new Image();
    img.src = "/me/formal black 2.png"

    img.onload = () => {
        changeBgImg();
        drawImgAgain(context, img);
    };

    // Optional: Update the shadow dynamically if dark mode changes
    const observer = new MutationObserver(() => {
        drawImgAgain(context, img);
      });
      observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  
      // Cleanup observer on component unmount
      return () => observer.disconnect();
   },[])

  return (
    <canvas ref={canvasRef} id="canv" className="myPhotos" width="320px" height="500px"></canvas>
  )
}

export default CanvasMyPhoto