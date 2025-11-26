import React from "react";
import NavBar from "../components/NavBar";

class Home extends React.Component<any, any> {
  render(): React.ReactNode {
    return (
      <>
        <NavBar />
        <h1 className="">Hello world</h1>
      </>
    );
  }
}

export default Home;
