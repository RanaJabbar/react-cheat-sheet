//Render components based on conditions:

function Greeting({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1>}
      </div>
    );
  }
  
  // If Statements

  function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
      return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign in.</h1>;
  }

  // Turnery Operator 

  function Greeting({ isLoggedIn }) {
    return (
      <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</h1>
    );
  }
  
// When you don’t need the else branch, you can also use a shorter logical && syntax:

<div>
  {isLoggedIn && <AdminPanel />}
</div>

// nested ifs
// handle multiple levels of conditions
// however If multiple conditions are closely related, combine them with logical operators (&&, ||) or ternary operators.



function UserGreeting({ user }) {
  if (user) {
    if (user.role === 'admin') {
      return <h1>Welcome back, Admin!</h1>;
    } else if (user.role === 'editor') {
      return <h1>Welcome back, Editor!</h1>;
    } else {
      return <h1>Welcome back, User!</h1>;
    }
  } else {
    return <h1>Please log in.</h1>;
  }
}
