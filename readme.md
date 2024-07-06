# CLI Template

This is a simple CLI (Command Line Interface) template project that demonstrates how to create and register a CLI tool using Node.js and npm.

## Features

- **Dynamic CLI Tool Registration**: Easily register your CLI tool globally using npm.
- **User Input Handling**: Prompt users for input to customize the CLI tool name dynamically.
- **Package.json Update**: Automatically update `package.json` with the CLI tool name.
- **Batch Script Integration**: Use batch scripts (`register.bat` and `unregister.bat`) for convenient tool registration and cleanup.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd cli-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

To register your CLI tool globally, follow these steps:

1. **Register the CLI Tool:**

   - Double-click `register.bat` or run it from the Command Prompt.
   - Enter the desired name for your CLI tool when prompted.

   **Note**: Do not register twice without first unregistering to avoid conflicts.

2. **Unregister the CLI Tool (Optional):**

   - If needed, double-click `unregister.bat` or run it from the Command Prompt to unregister the CLI tool globally.


### Notes

- Ensure you have administrative privileges or appropriate permissions to register and unregister global CLI tools.
- Always unregister (`unregister.bat`) before attempting to register (`register.bat`) again to avoid conflicts and ensure proper functionality.

