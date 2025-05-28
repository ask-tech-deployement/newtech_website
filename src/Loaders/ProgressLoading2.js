import { Dialog, Stack } from "@mui/material";
import React, { useContext } from "react";
import Loader2 from "../../Loaders/Loader2";
import cartContext from "../components/Context/cartContext";

const ProgressLoading2 = () => {
  const { openLoader } = useContext(cartContext);
  return (
    <Dialog
      open={openLoader}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#ffffff00",
        }}
      >
        <Loader2 />
      </Stack>
    </Dialog>
  );
};

export default ProgressLoading2;
