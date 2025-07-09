import React from 'react';
import store from '../../warehouse/store';
import { Button, TextField } from '@mui/material';
import { pallete } from '../../colors';
import { changeInputValue, setQRCodeSchema } from '../../warehouse/reducers/qrcode-reducer/actions';

const CodeInput: React.FC = () => {
  const state = store.getState()
  const inputValue = state.qrcodeData.inputValue

  const onGenerateQRCode = () => {
    store.dispatch(setQRCodeSchema(inputValue))
    store.dispatch(changeInputValue(""))
  }

  const onChangeInput = (string: string) => {
    store.dispatch(changeInputValue(string))
  }

  return (
    <>
      <TextField
        value={state.qrcodeData.inputValue}
        onChange={(e) => onChangeInput(e.target.value)}
        id="outlined-search"
        label="Generated Info"
        type="text"
        fullWidth
        sx={{
          input: { color: pallete.WHITE },
          "& label": { color: pallete.WHITE },
          "& .MuiOutlinedInput-root": { '& fieldset': { borderColor: pallete.WHITE } },
          "& .MuiOutlinedInput-notchedOutline": { borderWidth: "2px" }
        }} />
      <Button
        onClick={onGenerateQRCode}
        sx={{ fontWeight: "bold", fontSize: "1.4rem", padding: "0.6rem" }}
        size="medium" variant="contained" color="primary">
        Generate code
      </Button>
    </>
  );
};

export default CodeInput;