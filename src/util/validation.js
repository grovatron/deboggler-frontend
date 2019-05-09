export const isValidLetter = (letter) => (
  !((letter !== '' && !/^[A-Z]+$/.test(letter)) || (letter !== 'QU' && letter.length > 1))
)

export const isValidTextInput = (textInput, size) => {
  if ((textInput !== '' && !/^[A-Z]+$/.test(textInput)) || textInput.length > size) {
    return false;
  }
  return true;
}
