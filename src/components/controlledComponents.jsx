// Purpose: Manage form inputs with React state.
//The input's value is controlled by React state.
//Use event handlers like onChange to update state.

function Form() {
    const [value, setValue] = React.useState('');
  
    const handleChange = (event) => setValue(event.target.value);
  
    return (
      <form>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <p>Typed Value: {value}</p>
      </form>
    );
  }
  

