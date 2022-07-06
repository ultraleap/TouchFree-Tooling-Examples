function convert(colour: string, percent: number) {
  const colourDec = Math.round(parseInt(colour, 16) * (percent / 100));

  const newColour = colourDec.toString(16);

  if (newColour.length < 2) {
    return `0${newColour}`;
  }
  return newColour;
}

export default function darken(colour: string, percent: number) {
  colour = colour.replace("#", "");

  const red: string = convert(colour.substring(0, 2), percent);
  const green: string = convert(colour.substring(2, 4), percent);
  const blue: string = convert(colour.substring(4, 6), percent);

  return `#${red}${green}${blue}`;
}
