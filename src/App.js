import React from "react";
import { Container } from "@material-ui/core";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Container style={{ width: 950 }}>
        <Content />
      </Container>
    </>
  );
};

export default App;
