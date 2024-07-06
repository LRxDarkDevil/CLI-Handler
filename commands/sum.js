module.exports = {
    name: 'sum <numbers...>',
    description: 'Calculate the sum of the given numbers',
    
    action: (numbers) => {


      const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
      console.log(`The sum is: ${sum}`);
    
    
    
    }
  };
  