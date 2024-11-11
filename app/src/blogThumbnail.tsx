import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import darkTheme from './theme';

interface BlogThumbnailProps {
    title: string;
    date: string;
    synopsis: string;
    tags: string[];
}

const BlogThumbnail: React.FC<BlogThumbnailProps> = ({ title, date, synopsis, tags }) => {
    return (
      <Box
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

        {/* Blog Date */}
        <Typography variant="subtitle2" sx={{ color: darkTheme.palette.text.secondary }}>
          {date}
        </Typography>

        {/* Blog Synopsis */}
        <Typography variant="body2" sx={{ color: darkTheme.palette.text.primary }}>
          {synopsis}
        </Typography>

        {/* Tags Section */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 1 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              sx={{
                borderColor: darkTheme.palette.primary.main,
                color: darkTheme.palette.primary.main,
                '&:hover': {
                  backgroundColor: darkTheme.palette.action.hover,
                },
              }}
            />
          ))}
        </Box>
      </Box>
    );
  };

  export default BlogThumbnail;