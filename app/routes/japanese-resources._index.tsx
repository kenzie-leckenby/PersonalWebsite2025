import * as React from 'react';
import { Link } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ResourceThumbnail from '~/src/resourceThumbnail';
import { Container } from '@mui/material';
import darkTheme from '~/src/theme';

export default function JapaneseResourcesIndex() {
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
          Random HTML's Provided By ケンせんせい
        </Typography>
        <ResourceThumbnail title='Genki Listening Exercises' link={'Genki-Listening-Exercises'}></ResourceThumbnail>
        <ResourceThumbnail title='Japanese Mahjong' link={'Japanese-Mahjong'}></ResourceThumbnail>
        <ResourceThumbnail title='Japanese Read Aloud Trainer' link={'Japanese-Read-Aloud-Trainer'}></ResourceThumbnail>
        <ResourceThumbnail title='Lesson 6 BuyoBuyo Vocab Game' link={'Lesson-6-BuyoBuyo-Vocab-Game'}></ResourceThumbnail>
        <ResourceThumbnail title='Lesson 1-6 Vocab Game' link={'Lesson1-6-Vocab-Game'}></ResourceThumbnail>
      </Container>
    </React.Fragment>
  );
}