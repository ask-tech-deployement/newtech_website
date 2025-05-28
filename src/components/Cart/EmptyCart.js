import React from "react";
import { Button, Box, Typography } from "@mui/material";
import empty from "../../assets/cart/empty-cart.png";
import { useNavigate } from "react-router";

const EmptyCart = () => {
  const navigate=useNavigate()
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="70vh"
      textAlign="center"
      gap={2}
    >
      {/* Cart Illustration */}
      <img
        src={empty} // Replace with your empty cart illustration URL
        alt="Empty Cart"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      {/* Text */}
      <Typography variant="h5" fontWeight="bold">
        Your cart is empty
      </Typography>
      <Typography color="textSecondary">
        Looks like you have not added anything to your cart. <br />
        Go ahead & explore top categories.
      </Typography>
      {/* Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')} // Adjust the redirect URL as needed
        style={{ marginTop: "20px" }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default EmptyCart;
