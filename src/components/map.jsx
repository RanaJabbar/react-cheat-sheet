// The .map() method creates a new array by applying a function to each element in an existing array, without modifying the original array.
//.map() Method: Creates a new array by transforming each element of an existing array.
//Always use a unique key for list items to help React identify which items changed.
//If items have unique IDs, use those instead of index

const fruits = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
