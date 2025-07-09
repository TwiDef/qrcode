import React from 'react';
import { Button, TextField } from '@mui/material';
import { pallete } from '../../colors';

const CodeInput: React.FC = () => {
  return (
    <>
      <TextField
        id="outlined-search"
        label="Generated Info"
        fullWidth
        sx={{
          input: { color: pallete.WHITE },
          "& label": { color: pallete.WHITE },
          "& .MuiOutlinedInput-root": { '& fieldset': { borderColor: pallete.WHITE } },
          "& .MuiOutlinedInput-notchedOutline": { borderWidth: "2px" }
        }} />
      <Button sx={{ fontWeight: "bold", fontSize: "1.4rem", padding: "0.6rem" }} size="medium" variant="contained" color="primary">
        Generate code
      </Button>
    </>
  );
};

export default CodeInput;