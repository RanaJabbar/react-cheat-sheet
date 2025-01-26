// The for loop repeats a block of code a set number of times.
// Although React prefers declarative methods like .map() for rendering lists, you can use a for loop to prepare data before rendering.

function NumberList() {
  const numbers = [];
  for (let i = 1; i <= 5; i++) {
    numbers.push(<li key={i}>{i}</li>);
  }

  return <ul>{numbers}</ul>;
}

// When to Use for Loops in React
//Preparing data before rendering, such as filtering or transforming.
//Building a list of items outside the return statement when .map() feels clunky or awkward.

function FilteredList({ numbers }) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return (
    <ul>
      {evenNumbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}

// Nested for loops
//If you need to iterate over multidimensional data (e.g., a grid), you can use nested for loops.

function Table() {
  const table = [];
  for (let row = 1; row <= 3; row++) {
    const cells = [];
    for (let col = 1; col <= 3; col++) {
      cells.push(<td key={col}>{`Row ${row}, Col ${col}`}</td>);
    }
    table.push(<tr key={row}>{cells}</tr>);
  }

  return (
    <table>
      <tbody>{table}</tbody>
    </table>
  );
}
