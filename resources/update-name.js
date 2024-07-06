const fs = require('fs');
const path = require('path');

// Get the new name from the command line arguments
const newName = process.argv[2];

if (!newName) {
  console.error('Please provide a name for the CLI tool.');
  process.exit(1);
}

// Path to package.json (assuming the script is in the resources directory)
const packageJsonPath = path.join(__dirname, '..', 'package.json');

// Read package.json
fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    process.exit(1);
  }

  // Parse package.json
  let packageJson = JSON.parse(data);

  // Update the bin field with the new name
  packageJson.bin = {};
  packageJson.bin[newName] = 'cli.js';

  // Write the updated package.json back to the file
  fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing package.json:', err);
      process.exit(1);
    }

    console.log(`package.json updated with CLI tool name: ${newName}`);
  });
});
