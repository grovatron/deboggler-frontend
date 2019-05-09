export const isValidLetter = (letter) => (
  !((letter !== '' && !/^[A-Z]+$/.test(letter)) || (letter !== 'QU' && letter.length > 1))
)

export const isValidTextInput = (textInput, size) => {
  if ((textInput !== '' && !/^[A-Z]+$/.test(textInput)) || textInput.length > size) {
    return false;
  }
  return true;
}

export const letterInputsValid = (letterInputs) => {
  for (let i = 0; i < letterInputs.length; i++) {
    if (letterInputs[i].letter === '') {
      return false;
    }
  }
  return true;
}

export const areEqual = (letterObjs, cachedLetterObjs) => {
  if (letterObjs.length !== cachedLetterObjs.length) {
    return false;
  }
  for (let i = 0; i < letterObjs.length; i++) {
    const letterLetter = letterObjs[i].letter;
    const cachedLetter = cachedLetterObjs[i].letter;
    const letterMod = letterObjs[i].modifier;
    const cachedMod = cachedLetterObjs[i].modifier;
    if (letterLetter !== cachedLetter || letterMod !== cachedMod) {
      return false;
    }
  }
  return true;
}
