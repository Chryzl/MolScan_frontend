import React from "react";
import { auth } from "./../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(userCredential.user.email);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Logout");
    await auth.signOut();
  };

  return (
    <div>
      <h1>Firebase Auth</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button type="submit" onClick={login}>
          Login
        </button>

        <button type="submit" onClick={logout}>
          Logout
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
