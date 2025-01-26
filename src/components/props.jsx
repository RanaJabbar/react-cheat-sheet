
//Props are how data is passed from a parent component to a child component. They are read-only
//Props are passed as attributes
//Props are immutable (cannot be changed by the child component)

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  // Using the component
  <Greeting name="John" />
  


