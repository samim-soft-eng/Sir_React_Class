import { useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        navigate('/login');
    };

  return (
    <div>
        <h1>Registration</h1>
        <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Enter Name" required />
          <input type="email" name="email" placeholder="Enter Email" required />
          <input type="password" name="password" placeholder="Enter Password" required />
          <button type="submit">Register</button>
        </form>
    </div>
  );
}

export default Registration;