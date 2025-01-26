
//State is data managed within a component. It can be updated with setState.

//Hooks allow you to use state and other React features in functional components

//useState - Manages state in a functional component.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


//useEffect - Manages side effects like data fetching or DOM manipulation.

import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    console.log('Component mounted or updated');
  });

  return <p>Check the console</p>;
}

