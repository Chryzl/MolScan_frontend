import React from "react";
import { auth } from "./../firebase-config";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const userEmail = auth.currentUser?.email;
  return (
    <div>
      <h1>Home</h1>
      <p>Hello {userEmail}</p>
    </div>
  );
};

export default HomePage;
