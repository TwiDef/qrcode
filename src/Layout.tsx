import React from 'react';
import store from './warehouse/store';
import { Box, Button, Typography } from '@mui/material';
import { decrement, increment } from './warehouse/reducers/counter-reducer/actions';
import { getPosts } from './utils/network';

type LayoutProps = {

}

const Layout: React.FC<LayoutProps> = () => {
  const state = store.getState()

  React.useEffect(() => {
    getPosts("https://dummyjson.com/posts")
  }, [])

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button
          onClick={() => store.dispatch(increment())}
          variant="contained">+</Button>

        <Typography sx={{ textAlign: "center", fontSize: "30px" }}>{state.counter.value}</Typography>

        <Button
          onClick={() => store.dispatch(decrement())}
          variant="contained">-</Button>
      </Box>

      <ul>
        {state.json && state.json.posts.map(post => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>

    </Box>
  )
}

export default Layout;
