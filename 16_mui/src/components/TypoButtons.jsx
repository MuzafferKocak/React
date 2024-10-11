import Typography from "@mui/material/Typography";
// or
//? named import
// import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TypoButton = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          p: 2,
          mt: 3,
        }}
      >
        <Typography variant="h2" component="h3">
          Beispiel
        </Typography>

        <Typography variant="body1" color="violet">
          Beispiel Element
        </Typography>
        <Typography variant="body2" color="#dc143c">
          Beispiel Element
        </Typography>
        <Typography variant="subtitle1" color="primary">
          Beispiel Element
        </Typography>
        <Typography variant="subtitle2" color="secondary" mt={2}>
          Beispiel Element
        </Typography>
        <Typography variant="button" color="error" mt={2}>
          Beispiel Element
        </Typography>
      </Box>
      <Typography variant="h2" align="center" color="turquoise" mt={4} flexWrap={"wrap"}>
        BUTTONS
      </Typography>
      <Stack direction={"row"} mt={3} gap={2} justifyContent={"center"}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined" color="error">Outlined</Button>
        <Button variant="contained" color="warning">Outlined</Button>
        <Button variant="contained" sx={{
          color: "black",
          backgroundColor: "#bede",
          ":hover": {backgroundColor: "#3ac798ed"}
        }}>Outlined</Button>
      </Stack>
    </>
  );
};

export default TypoButton;
