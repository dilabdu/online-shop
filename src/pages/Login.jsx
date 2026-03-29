import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isPending, loginWithEmail } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithEmail(email, password);
  };
  return (
    <main>
      <section className="h-screen grid place-items-center">
        <form onSubmit={handleSubmit} className="w-96 mx-auto">
          <h1 className="text-3xl font-medium mb-5"> Login</h1>

          <label className="flex flex-col gap-1 mb-5">
            <span>Email:</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
              className="input w-full"
              placeholder="johndoe@gmail.com"
            />
          </label>
          <label className="flex flex-col gap-1 mb-5">
            <span>Password:</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required
              className="input w-full"
              placeholder="******"
            />
          </label>

          {!isPending && (
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          )}
          {isPending && (
            <button type="submit" disabled className="btn btn-primary w-full">
              Loging...
            </button>
          )}
          <p className="mt-5 text-center">
            <span className="text-blue-500 font-medium">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;
