import { Box, Typography, styled } from "@mui/material";

export const BoxStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "auto",
  border: "3px solid black",
  borderRadius: "10px",
  padding: "20px",
  margin: "30px",
  //background: "gray",
 // backgroundImage: "linear-gradient(to top, yellow, #ef6c00)",
});
export const TypographyStyle = styled(Typography)({
  color: "black",
  fontFamily: "Poppins",
  fontWeight: "bolder",
  margin: "30px",
});
