// Function: modifyByPercent
// Takes a colour string (in hexadecimal format) and modifies it's value by a given percentage.
// Always returns a two character string (prepends a zero if necessary).
function modifyByPercent(colour: string, percent: number): string {
    const colourDec: number = Math.round(
        parseInt(colour, 16) * (percent / 100)
    );

    const newColour: string = colourDec.toString(16);

    if (newColour.length < 2) {
        return `0${newColour}`;
    }

    return newColour;
}

// Function: darken
// Darkens a given colour (in hex format e.g. #FF00FF) and darkens it by a given percentage.
// Returns the modified colour string in the same format.
export default function darken(colour: string, percent: number): string {
    colour = colour.replace("#", "");

    const red: string = modifyByPercent(colour.substring(0, 2), percent);
    const green: string = modifyByPercent(colour.substring(2, 4), percent);
    const blue: string = modifyByPercent(colour.substring(4, 6), percent);

    return `#${red}${green}${blue}`;
}
