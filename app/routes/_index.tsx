import * as React from 'react';
import type { MetaFunction } from '@remix-run/node';
import { Link as RemixLink } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import darkTheme from '~/src/theme';
import { Box, Container } from '@mui/material';
import profileImage from '../files/profile_photo.jpg'

// https://remix.run/docs/en/main/route/meta
export const meta: MetaFunction = () => [
  { title: 'Kenzie Leckenby' },
  { name: 'My own personal website for all my doodads', content: 'Welcome to my site!' },
];


function InterestBuffet() {
  const interests = ['graphics nerd', 'hobby bookbinder', 'college student', 'game modder', 'space lover'];

  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 5000;

  const [currentInterest, setCurrentInterest] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopIndex, setLoopIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    const currentWord = interests[loopIndex % interests.length];

    let typingTimeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      typingTimeout = setTimeout(() => {
        setCurrentInterest((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setCurrentInterest((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (charIndex === currentWord.length && !isDeleting) {
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, loopIndex, interests]);

  return (
    <Typography sx={{
      color: 'transparent',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      backgroundImage: `linear-gradient(.25turn, ${darkTheme.palette.primary.main}, ${darkTheme.palette.secondary.main})`,
      WebkitBackgroundClip: 'text',
      '& .blinking-cursor': {
        color: darkTheme.palette.text.primary,
        animation: 'blink 1s step-end infinite',
      },
      '@keyframes blink': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
      },
    }}>
      <span>A </span>
      {currentInterest}
      <span className="blinking-cursor">|</span>
    </Typography>
  );
}

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function Index() {
  return (
    <React.Fragment>
      <Container disableGutters maxWidth='xl' sx={{
        display: { xs: 'none', sm: 'none' ,md: 'none', lg: 'none', xl: 'grid' },
        mt: 16,
      }}>
        <Typography variant="h2" component="h1" sx={{
          fontWeight: 500,
          pb: 3,
          mb: 4,
          borderBottom: `2px solid ${darkTheme.palette.divider}`,
        }}>
          Hello World! <br />
          I'm Kenzie Leckenby <br />
          <InterestBuffet></InterestBuffet>
        </Typography>
        <Typography variant='h4'>
          I'm a computer science major at George Mason Univeristy with an acute interest in Graphics Computing and a love of Virtual Reality.
          Who is finally giving some love to their poor website which has been negelected since I first learned html and css.
        </Typography>
      </Container>



      <Container disableGutters maxWidth='lg' sx={{
        display: { xs: 'none', sm: 'none' ,md: 'none', lg: 'grid', xl: 'none' },
        mt: 16,
      }}>
        <Typography variant="h2" component="h1" sx={{
          fontWeight: 500,
          pb: 3,
          mb: 4,
          borderBottom: `2px solid ${darkTheme.palette.divider}`,
        }}>
          Hello World! <br />
          I'm Kenzie Leckenby <br />
          <InterestBuffet></InterestBuffet>
        </Typography>
        <Typography variant='h4'>
          I'm a computer science major at George Mason Univeristy with an acute interest in Graphics Computing and a love of Virtual Reality.
          Who is finally giving some love to their poor website which has been negelected since I first learned html and css.
        </Typography>
      </Container>



      <Container disableGutters maxWidth='md' sx={{
        display: { xs: 'none', sm: 'none' ,md: 'grid', lg: 'none', xl: 'none' },
        mt: 16,
      }}>
        <Typography variant="h2" component="h1" sx={{
          fontWeight: 500,
          pb: 3,
          mb: 4,
          borderBottom: `2px solid ${darkTheme.palette.divider}`,
        }}>
          Hello World! <br />
          I'm Kenzie Leckenby <br />
          <InterestBuffet></InterestBuffet>
        </Typography>
        <Typography variant='h4'>
          I'm a computer science major at George Mason Univeristy with an acute interest in Graphics Computing and a love of Virtual Reality.
          Who is finally giving some love to their poor website which has been negelected since I first learned html and css.
        </Typography>
      </Container>



      <Container disableGutters maxWidth='xl' sx={{
        display: { xs: 'none', sm: 'grid' ,md: 'none', lg: 'none', xl: 'none' },
        mt: 12,
      }}>
        <Typography variant="h3" component="h1" sx={{
          fontWeight: 500,
          pb: 2,
          mb: 3,
          borderBottom: `2px solid ${darkTheme.palette.divider}`,
        }}>
          Hello World! <br />
          I'm Kenzie Leckenby <br />
          <InterestBuffet></InterestBuffet>
        </Typography>
        <Typography variant='h5'>
          I'm a computer science major at George Mason Univeristy with an acute interest in Graphics Computing and a love of Virtual Reality.
          Who is finally giving some love to their poor website which has been negelected since I first learned html and css.
        </Typography>
      </Container>



      <Container disableGutters maxWidth='xl' sx={{
        display: { xs: 'grid', sm: 'none' ,md: 'none', lg: 'none', xl: 'none' },
        mt: 8,
      }}>
        <Typography variant="h4" component="h1" sx={{
          fontWeight: 500,
          pb: 1,
          mb: 2,
          borderBottom: `2px solid ${darkTheme.palette.divider}`,
        }}>
          Hello World! <br />
          I'm Kenzie Leckenby <br />
          <InterestBuffet></InterestBuffet>
        </Typography>
        <Typography variant='h6'>
          I'm a computer science major at George Mason Univeristy with an acute interest in Graphics Computing and a love of Virtual Reality.
          Who is finally giving some love to their poor website which has been negelected since I first learned html and css.
        </Typography>
      </Container>
    </React.Fragment>
  );
}
