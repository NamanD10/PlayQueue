
import { Box, Typography, Grid, Container, Paper } from '@mui/material';
import { SmartToy, PlaylistAddCheck, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const steps = [
    {
      icon: <Search sx={{ fontSize: 40, color: '#00adb5' }} />,
      title: 'Search Games',
      description: 'Find your favorite titles using our game search powered by the RAWG API.',
      route:'search'
    },
    {
      icon: <PlaylistAddCheck sx={{ fontSize: 40, color: '#ff2e63' }} />,
      title: 'Add to Your Queue',
      description: 'Categorize games into Played, Playing, or Wishlist with one click.',
      route:'user'
    },
    {
      icon: <SmartToy sx={{ fontSize: 40, color: '#f9ed69' }} />,
      title: 'Track & Explore',
      description: 'Stay organized and discover new games to add to your list.',
      route:'games'
    },
  ];
  
  function HowItWorks() {
    const navigate = useNavigate();

    return (
        <Box
        sx={{
          backgroundColor: 'background.paper',
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 6,
            }}
          >
            How It Works
          </Typography>

          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid size={{xs:12, md:4}} key={index}>
                <Paper
                  onClick ={() => navigate(`/${step.route}`)}
                  elevation={6}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: '#1f1f1f',
                    borderRadius: 4,
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 0 20px #00adb5',
                    },
                  }}
                >
                  {step.icon}
                  <Typography variant="h6" sx={{ mt: 2, color: '#00adb5' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    )
  }
  
  export default HowItWorks