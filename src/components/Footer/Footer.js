import { Container, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return <Container style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"50px", marginBottom:"50px"}}>
    <Typography variant="subheading">Copyright © Manas Agarwal 2022.</Typography>
  </Container>;
};

export default Footer;
