// Function to update the images shadow color based on the mode

export const changeBgImg = () => {
  const body = document.body;
  if (body.classList.contains("dark")) {
    shadowHoverColor = getComputedStyle(body)
      .getPropertyValue("--text-color")
      .trim();
  } else {
    shadowHoverColor = getComputedStyle(body)
      .getPropertyValue("--hover-color")
      .trim();
  }
  return shadowHoverColor;
};
