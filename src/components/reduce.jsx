// Purpose: Process an array and return a single value (e.g., sum, average).
//The reduce() method reduces an array to a single value by calling a callback function in every item of the existing array.

const numbers = [1, 2, 3, 4, 5];

function TotalSum() {
  const sum = numbers.reduce((total, number) => total + number, 0);

  return <p>Total Sum: {sum}</p>;
}
