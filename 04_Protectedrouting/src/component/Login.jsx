import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem('login', 'true');
      navigate('/admin');
      return;
    }

    window.alert('Invalid email or password');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Enter Email" required />
        <input type="password" name="password" placeholder="Enter Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
