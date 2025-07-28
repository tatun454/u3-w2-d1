import React from "react";
import { Container, Navbar } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mt-4">
      <Container className="justify-content-center">
        <Navbar.Text>© 2024 EpiBooks. All rights reserved.</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default MyFooter;
