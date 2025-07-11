import React from 'react';
import store from './warehouse/store';
import { Box, Stack } from '@mui/material';
import { getPosts } from './utils/network';
import { pallete } from './colors';

import CodeGenerator from './components/CodeGenerator';
import CodeInput from './components/CodeInput/CodeInput';
import CodeScanner from './components/CodeScanner';

const Layout: React.FC = () => {
  const state = store.getState()

  React.useEffect(() => {
    getPosts("https://dummyjson.com/posts")
  }, [])

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "1rem",
      bgcolor: pallete.DARK_GREY
    }}>
      <Stack sx={{ gap: 5 }}>
        <CodeGenerator />
        <CodeInput />
      </Stack>
      <CodeScanner />
    </Box>
  )
}

export default Layout;
