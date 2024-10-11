import Typography from "@mui/material/Typography";
// or
//? named import
// import { Typography } from '@mui/material';

const TypoButton = () => {
  return (
    <>
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
      <Typography variant="subtitle2" color="secondary">
        Beispiel Element
      </Typography>
    </>
  );
};

export default TypoButton;
