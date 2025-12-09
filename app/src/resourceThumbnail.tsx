import React from 'react';
import { Link } from '@remix-run/react';
import { Box, Typography, Chip } from '@mui/material';
import darkTheme from './theme';

interface ResourceThumbnailProps {
    title: string;
    link: string;
}

const ResourceThumbnail: React.FC<ResourceThumbnailProps> = ({ title, link }) => {
    return (
      <Box
        component={Link}
        to={`/japanese-resources/${link}`}
        sx={{
          textDecoration: 'none',
          border: `1px solid ${darkTheme.palette.divider}`,
          borderRadius: '8px',
          padding: 2,
          marginBottom: 1,
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
        {/* Resource Title */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: darkTheme.palette.primary.main }}>
          {title}
        </Typography>
      </Box>
    );
  };

  export default ResourceThumbnail;