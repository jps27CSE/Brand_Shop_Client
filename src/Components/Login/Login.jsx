import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success(`Google Logging Successfully..
       Email: ${result.user.email}
      `);
        if (location.state === null) {
          navigate("/");
        } else {
          navigate(`${location.state}`);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        toast.success(`
        Login Successfully!...................

        Email : ${result.user.email} 
        `);
        if (location.state === null) {
          navigate("/");
        } else {
          navigate(`${location.state}`);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Welcome back! Please sign in to access your account. If you are
              new here, you can create an account quickly and easily. We are
              here to make your tech experience even better.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Create an Account..{" "}
                <Link to="/register">
                  <span className="cursor-pointer text-blue-400">
                    Register Now
                  </span>
                </Link>
              </p>
            </form>
            <div className="flex mx-auto p-4">
              <button onClick={handleGoogleLogin} className="btn btn-ghost">
                <FcGoogle className="text-2xl" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
