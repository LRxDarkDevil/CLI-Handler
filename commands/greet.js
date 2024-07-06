module.exports = {
    name: 'greet <name>',
    description: 'Greet a user by name',
    
    action: (name) => {
      console.log(`Hello, ${name}!`);
    }
  };
  