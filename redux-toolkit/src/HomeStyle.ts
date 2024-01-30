import { Box, TextField, Typography, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { List, ListItem, ListItemText } from "@mui/material";

export const BoxStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "20px",
  padding: "20px",
  maxWidth: "615px",
  margin: "30px",
  background:"none",
});

export const TypographyStyle = styled(Typography)({
  color: "#ab003c",
  fontFamily: "cursive",
  fontWeight:"bolder",
});

export const TextFieldStyle = styled(TextField)({
  margin: "10px",
  padding:"0px",
  width: "100%",
  height:"auto",
  border:"none",
  borderRadius:"5px",
  backgroundImage: "linear-gradient(white,#fad4e9)",
});

export const ButtonStyle = styled(Button)({
  marginRight: "auto",
  fontFamily: "cursive",
  fontSize: "30px",
  color: "white",
  height:"50px",
  width: "120px",
  fontWeight: "bold",
  borderRadius: "50px",
  backgroundImage: "linear-gradient(to right, #c62828, #ef6c00)",
  padding: '10px',
  boxShadow: '2px 2px 2px 2px #ef6c00',
  transition: "background-color 0.3s ease",
  // backgroundImage: `url('./assets/flower.png')` ,

  '&:hover': {
    backgroundImage: "linear-gradient(to right, yellow, #ef6c00)",
    width: "117px",
    height:"45px", 
  },
});
export const ListStyle = styled(List)({
  display: "flex",
  flexDirection: "column",
});
export const ListItemStyle = styled(ListItem)({
  display: "block",
  fontWeight: "bold",
  color: "red"
});
export const ListItemTextStyle  = styled(ListItemText)({
  borderRadius:"20px",
  width:"550px",
  backgroundImage: "linear-gradient(to left,#c62828, #ef6c00)",
  padding:"10px 30px 10px 30px",
  color: "white",
  fontWeight:"bold",

});

