import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { dec, inc } from './warehouse/store';

type LayoutProps = {
  state: any
}

const Layout: React.FC<LayoutProps> = ({ state }) => {

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Button
        onClick={() => {
          inc()
          console.log(state)
        }}
        variant="contained">+</Button>

      <Typography sx={{ textAlign: "center", fontSize: "30px" }}>{state.value}</Typography>

      <Button
        onClick={() => {
          dec()
          console.log(state)
        }}
        variant="contained">-</Button>
    </Box>
  )
}

export default Layout;
