#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const path = require('path');

// Set the version of your CLI tool
program.version('1.0.0');

// Dynamically import all command modules
const commandsPath = path.join(__dirname, 'commands');
fs.readdirSync(commandsPath).forEach((file) => {
  const command = require(path.join(commandsPath, file));
  program
    .command(command.name)
    .description(command.description)
    .action(command.action);
});

// Parse the command-line arguments
program.parse(process.argv);
