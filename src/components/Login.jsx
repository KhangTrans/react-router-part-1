
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/account";

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate(from, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <p>Nhấn nút để “đăng nhập” demo.</p>
      <button className="btn btn-primary" onClick={handleLogin}>
        Đăng nhập
      </button>
    </div>
  );
};

export default Login;
