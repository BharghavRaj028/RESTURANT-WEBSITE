import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        We are delighted to have you with us. At [RAJ RESTURANT],
         we pride ourselves on creating an exceptional dining experience with our carefully crafted menu,
          warm ambiance, and attentive service. 
          Whether you're here to enjoy a casual meal with friends or celebrate a special occasion, 
          our team is committed to making your visit memorable.
          Indulge in our diverse selection of dishes,
           made with the freshest ingredients and inspired by both traditional and contemporary flavors.
            From our signature appetizers to our delectable desserts,
           we strive to offer something for every palate.
        </p>
        <br />
        <p>
        Thank you for choosing [RAJ RESTURANT].
         We hope you enjoy your meal and look forward to serving you!
        </p>
      </Box>
    </Layout>
  );
};

export default About;