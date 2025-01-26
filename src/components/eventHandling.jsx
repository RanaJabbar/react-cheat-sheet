//The handleClick function is called when the button is clicked.
//You pass the function reference (not a call) to the event handler: onClick={handleClick}.

function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

//You can pass arguments to an event handler using an inline arrow function.

function GreetButton() {
  const handleGreet = (name) => {
    alert(`Hello, ${name}!`);
  };

  return <button onClick={() => handleGreet('John')}>Greet</button>;
}

//Event Object
//The event handler receives an event object as an argument. This object contains information about the event, such as the type, target,

function InputBox() {
  const handleChange = (event) => {
    console.log(event.target.value); // Logs the current value of the input
  };

  return <input type="text" onChange={handleChange} />;
}
