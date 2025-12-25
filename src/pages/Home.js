import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: '20px' }}>
    <h1>Welcome to Home Page</h1>
    <Link to="/login">Go to Login</Link>
  </div>
);

export default Home;