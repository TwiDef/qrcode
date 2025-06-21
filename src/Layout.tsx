import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import store from './warehouse/store';

type LayoutProps = {

}

const Layout: React.FC<LayoutProps> = () => {
  const state = store.getState()

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Button
        onClick={() => {
          store.dispatch({ type: "INC", payload: "" })
        }}
        variant="contained">+</Button>

      <Typography sx={{ textAlign: "center", fontSize: "30px" }}>{state.value}</Typography>

      <Button
        onClick={() => {
          store.dispatch({ type: "DEC", payload: "" })
        }}
        variant="contained">-</Button>
    </Box>
  )
}

export default Layout;
