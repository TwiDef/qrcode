import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import store from './warehouse/store';
import { add_100, decrement, increment } from './warehouse/actions';

type LayoutProps = {

}

const Layout: React.FC<LayoutProps> = () => {
  const state = store.getState()

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button
          onClick={() => store.dispatch(increment())}
          variant="contained">+</Button>

        <Typography sx={{ textAlign: "center", fontSize: "30px" }}>{state.value}</Typography>

        <Button
          onClick={() => store.dispatch(decrement())}
          variant="contained">-</Button>
      </Box>
      <Button
        onClick={() => store.dispatch(add_100(100))}
        sx={{ width: "200px" }}
        size='large'
        variant="outlined">ADD 100</Button>
    </Box>
  )
}

export default Layout;
