import * as React from 'react';
import { Link } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BlogThumbnail from '~/src/blogThumbnail';
import { Container } from '@mui/material';
import darkTheme from '~/src/theme';

export default function About() {
  return (
    <React.Fragment>
      <Container maxWidth='xl' disableGutters>
        <Typography variant="h3" component="h1" sx={{ 
          mt: 2, 
          pb: 2,
          mb: 4, 
          fontWeight: 500,
          borderBottom: `2px solid ${darkTheme.palette.divider}`
        }}>
          Welcome to my blog!
        </Typography>
        <BlogThumbnail title='New Blog Post' date='2:08pm - November 12, 2024' synopsis='Wow I be yappin' tags={['C#', 'Yap']}></BlogThumbnail>
      </Container>
    </React.Fragment>
  );
}
