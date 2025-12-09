import React from 'react';
import { Link } from '@remix-run/react';
import { Box, Typography, Chip } from '@mui/material';
import darkTheme from './theme';

interface ResourceThumbnailProps {
    title: string;
    synopsis: string;
    link: string;
}

const ResourceThumbnail: React.FC<ResourceThumbnailProps> = ({ title, synopsis, link }) => {
    return (
      <Box
        component={Link}
        to={link}
        sx={{
          border: `1px solid ${darkTheme.palette.divider}`,
          borderRadius: '8px',
          padding: 2,
          backgroundColor: darkTheme.palette.background.paper,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          cursor: 'pointer',
        }}
      >
        {/* Blog Title */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: darkTheme.palette.primary.main }}>
          {title}
        </Typography>

        {/* Blog Synopsis */}
        <Typography variant="body2" sx={{ color: darkTheme.palette.text.primary }}>
          {synopsis}
        </Typography>
      </Box>
    );
  };

  export default ResourceThumbnail;