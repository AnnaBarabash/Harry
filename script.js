const fs = require('fs');
const execSync = require('child_process').execSync;

const fileUrl = "https://raw.githubusercontent.com/aliaskov/whiteboard/master/nbviewer/notebooks/data/harrypotter/Book%201%20-%20The%20Philosopher's%20Stone.txt";
const outputFile = 'Book1.txt';

execSync(`curl "${fileUrl}" -o ${outputFile}`);

fs.readFile(`./${outputFile}`, 'utf8' , (err, text) => {
  const count = text.match(/Harry/g).length;
  console.log(count);

  fs.writeFileSync(outputFile, text.replace(/Harry/g, 'Anna'));
});
