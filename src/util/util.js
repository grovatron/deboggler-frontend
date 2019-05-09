export const getGridDimension = (letterObjs) => {
  return Math.floor(Math.sqrt(letterObjs.length));
}

export const getIndex = (dimensions, row, col) => {
  return (row * dimensions) + (col % dimensions);
}
