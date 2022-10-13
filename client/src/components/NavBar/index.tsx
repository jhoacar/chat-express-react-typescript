import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <div>
      <div>
        <div>
          <header>
            <div />
            <p>
              Web App for VideoChat ( WebRTC )
            </p>
          </header>
        </div>
      </div>
      <div>
        <div>
          <Link to="/login">
            Sign In
          </Link>
          <Link to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
