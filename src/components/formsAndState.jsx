function SimpleForm() {
    const [text, setText] = React.useState('');
  
    const handleChange = (event) => setText(event.target.value);
  
    return (
      <form>
        <label>
          Type something:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <p>You typed: {text}</p>
      </form>
    );
  }
  
// handling forms with events 

function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
