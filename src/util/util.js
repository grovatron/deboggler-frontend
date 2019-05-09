export const getGridDimension = (letterObjs) => {
  return Math.floor(Math.sqrt(letterObjs.length));
}

export const getIndex = (dimensions, row, col) => {
  return (row * dimensions) + (col % dimensions);
}

export const getConnectorStyle = (index, filter, dimensions) => {
  const filterIndex = filter.indexOf(index);
  if (filterIndex === filter.length - 1) return null;
  const nextLetterIndex = filter[filterIndex + 1];
  const letterRow = Math.floor(index / dimensions);
  const letterCol = index % dimensions;
  const nextLetterRow = Math.floor(nextLetterIndex / dimensions);
  const nextLetterCol = nextLetterIndex % dimensions;
  const style = ['connector'];

  if (letterRow < nextLetterRow) {
    style.push('bottom');
  } else if (letterRow > nextLetterRow) {
    style.push('top');
  }

  if (letterCol < nextLetterCol) {
    style.push('right');
  } else if (letterCol > nextLetterCol) {
    style.push('left');
  }
  return style.join('-');
}
