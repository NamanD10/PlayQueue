import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #00adb5 0%, #ff2e63 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
}));

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <GradientText variant="h2" gutterBottom>
          Track Your Gaming Journey
        </GradientText>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Add games you've played, are playing, or want to play. Stay organized and never lose track again.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={()=>navigate('/games')}
          sx={{
            mt: 4,
            px: 5,
            py: 1.5,
            fontSize: '1rem',
            borderRadius: '999px',
            boxShadow: '0 0 10px #00adb5',
            transition: '0.3s',
            '&:hover': {
              boxShadow: '0 0 15px #00adb5',
              transform: 'scale(1.05)',
            },
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
