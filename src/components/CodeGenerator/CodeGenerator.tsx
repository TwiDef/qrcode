import React from 'react';
import store from '../../warehouse/store';
import { pallete } from '../../colors';
import { QRCodeSVG } from 'qrcode.react';
import { Box } from '@mui/material';

const CodeGenerator: React.FC = () => {
  const state = store.getState()
  const codeSchema = state.qrcodeData.codeSchema

  return (
    <Box sx={{
      borderRadius: "10px",
      bgcolor: pallete.LIGHT_GREY,
      padding: "1rem",
      width: "fit-content"
    }}>
      <QRCodeSVG
        size={256}
        bgColor={pallete.LIGHT_GREY}
        value={codeSchema} />
    </Box>
  );
};

export default CodeGenerator;