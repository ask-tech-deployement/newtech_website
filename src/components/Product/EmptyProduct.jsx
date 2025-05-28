import React from "react";
import {  Box, Typography } from "@mui/material";
import empty from "../../assets/product/empty-search.png";

const EmptyProduct = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="50vh"
      textAlign="center"
      className="col-md-9 col-12"
    >
      {/* Cart Illustration */}
      <img
        src={empty} // Replace with your empty cart illustration URL
        alt="Empty Cart"
        style={{ width: "200px"}}
      />
      {/* Text */}
      <Typography variant="h5" fontWeight="bold">
      No products match your search
      </Typography>
      <Typography color="textSecondary" mt={1}>
      Please adjust your filters and try again.
      </Typography>
      {/* Button */}
    </Box>
  );
};

export default EmptyProduct;
