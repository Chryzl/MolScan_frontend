import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export interface IAuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [loading, setLoading] = React.useState(true);
  const { children } = props;

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        navigate("/login");
      }
    });

    return () => AuthCheck();
  }, [auth]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthRoute;
