import * as React from 'react';
import { Link } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function About() {
  return (
    <React.Fragment>
      <Typography variant="h2" component="h1" sx={{ mt: 2, fontWeight: 500}}>
        Welcome to my blog!
      </Typography>
    </React.Fragment>
  );
}
