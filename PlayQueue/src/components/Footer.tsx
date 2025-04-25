import { Box, Typography, Link, Stack, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#111',
        py: 4,
        mt: 8,
        borderTop: '1px solid #222',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} PlayQueue — Powered by{' '}
            <Link
              href="https://rawg.io/apidocs"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="#00adb5"
            >
              RAWG API
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Link
              href="https://github.com/NamanD10/PlayQueue"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                transition: '0.3s',
                '&:hover': { color: '#00adb5' },
              }}
            >
              <GitHubIcon />
            </Link>
            <Link
              href="https://x.com/Du36687974Dubey"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                transition: '0.3s',
                '&:hover': { color: '#ff2e63' },
              }}
            >
              <TwitterIcon />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
