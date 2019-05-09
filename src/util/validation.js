export const isValidLetter = (letter) => (
  !((letter !== '' && !/^[A-Z]+$/.test(letter)) || (letter !== 'QU' && letter.length > 1))
)
