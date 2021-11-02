import { Container, Typography } from "@mui/material";
import React from "react";
import Meta from "../components/Meta";

export default function Welcome() {
  return (
    <>
      <Meta title=""></Meta>
      <Container component="main" maxWidth="xs">
        <Typography align="center" variant="h3" component="h2">
          Welcome
        </Typography>
        <Typography align="center" variant="h6" component="h2">
          Inherited from Main Layout
        </Typography>
      </Container>
    </>
  );
}
