/**
 * Universal Variables
 */
let hexString = "0123456789abcdef";

/**
 * Generate random colors
 */
export const randomColor = () => {
  let hexCode = "#";
  for(let i=0; i<6; i++){
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
}

/**
 * Gradient generator
 */
export const generateRandomGradient = () => {
  let colorOne = randomColor();
  let colorTwo = randomColor();
  let colorThree = randomColor();
  let angle = Math.floor(Math.random() * 360);
  return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}, ${colorThree})`;
}

export default {
  randomColor,
  generateRandomGradient
}
