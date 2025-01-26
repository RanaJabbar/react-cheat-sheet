//Purpose: Create a new array containing only items that pass a condition.

const numbers = [1, 2, 3, 4, 5];

function EvenNumbers() {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  return (
    <ul>
      {evenNumbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
}
