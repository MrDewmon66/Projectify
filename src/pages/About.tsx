import React from "react";
import NavBar from "../components/NavBar";

class About extends React.Component<any, any> {
  render(): React.ReactNode {
    return (
      <>
        <NavBar />
        <h1 className="">Hello from about page</h1>
      </>
    );
  }
}

export default About;
