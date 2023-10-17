import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen max-w-6xl mx-auto ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Ready to get started? Register now to unlock the world of
                cutting-edge technology and electronics. Enjoy exclusive deals,
                personalized recommendations, and a seamless shopping
                experience. Join us today and embrace the future of tech!
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p>
                  Already have an Account?..{" "}
                  <Link to="/login">
                    <span className="cursor-pointer text-blue-400">
                      Login Now
                    </span>
                  </Link>
                </p>
              </form>
              <div className="flex mx-auto p-4">
                <button className="btn btn-ghost">
                  <FcGoogle className="text-2xl" />
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
