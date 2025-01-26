//Props: Passed from parent to child. Immutable.
//State: Managed within the component. Mutable (changes with setState or useState).

function Parent() {
    const [count, setCount] = React.useState(0);
  
    return <Child count={count} increment={() => setCount(count + 1)} />;
  }
  
  function Child({ count, increment }) {
    return (
      <div>
        <p>Count from parent: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
  
