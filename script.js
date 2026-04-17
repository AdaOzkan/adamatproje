function start() {
  let numGreen = 0;
  let numRed = 0;
  let numBlack = 0;
  let numOdd = 0;
  let numEven = 0;

  let spinCount = parseInt(document.getElementById("spinCount").value);
  let output = "";

  for (let i = 0; i < spinCount; i++) {
    let spin = Math.floor(Math.random() * 37);

    if (spin === 0) {
      output += `SPIN ${i + 1}  Green  ${spin}\n`;
      numGreen++;
    } 
    else if (spin % 2 === 0) {
      output += `SPIN ${i + 1}  Black  ${spin}\n`;
      numBlack++;
      numEven++;
    } 
    else {
      output += `SPIN ${i + 1}  Red  ${spin}\n`;
      numRed++;
      numOdd++;
    }
  }

  output += "\n---STATS---\n";
  output += "Total spins: " + spinCount + "\n";

  output += "\n---COLORS---\n";
  output += "Green: " + numGreen + "\n";
  output += "Red: " + numRed + "\n";
  output += "Black: " + numBlack + "\n";

  output += "\n---ODD/EVEN---\n";
  output += "Odd: " + numOdd + "\n";
  output += "Even: " + numEven + "\n";

  document.getElementById("output").innerText = output;
}
