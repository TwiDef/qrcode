import React from 'react';
import { Scanner, type IDetectedBarcode } from '@yudiel/react-qr-scanner';
import { Box } from '@mui/material';

const CodeScanner: React.FC = () => {

  const scanHandler = (result: IDetectedBarcode[]) => {
    console.log(result)
  }

  return (
    <Box sx={{ width: "600px", mt: "6%" }}>
      <Scanner allowMultiple={true} onScan={(result: IDetectedBarcode[]) => scanHandler(result)} />
    </Box>
  )
}

export default CodeScanner;