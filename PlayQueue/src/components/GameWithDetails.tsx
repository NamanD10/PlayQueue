import { 
  Box, Container, Typography, Rating, CircularProgress, Divider, Paper, Grid, Card,CardContent, Link, List,ListItem,ListItemText
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GameDetails } from "../types";
import gameService from "../api/gameService";




function GameWithDetails() {
  const  { id }  = useParams();
  const [game, setGame]  = useState <GameDetails|undefined> (undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const fetchedDetails = await gameService.getDetails(id);
        console.log(fetchedDetails?.requirements);
        setGame(fetchedDetails);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  } , [id]);

  if(loading) {
    return(
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <CircularProgress size={60} />
    </Box>
    )
  }

  if(!game){
    return (
      <Container maxWidth="md">
        <Paper sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" color="error">Game not found</Typography>
          <Typography variant="body1" mt={2}>
            The game you're looking for might not exist or there was an error loading the data.
          </Typography>
        </Paper>
      </Container>
    );
  }
  
  console.log(game.requirements)
  return (      
         
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
    <Paper elevation={3} sx={{ overflow: 'hidden' }}>
      {/* Hero Image */}
      <Box sx={{ position: 'relative', height: 400 }}>
        <Box
          component="img"
          src={game.backgroundImg}
          alt={game.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundImage: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            p: 3,
          }}
        >
          <Typography variant="h3" component="h1" color="white">
            {game.name}
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Rating value={game.rating} readOnly precision={0.1} />
            <Typography variant="h6" color="white" sx={{ ml: 1 }}>
              {game.rating.toFixed(1)}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Left Side - Main Details */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box mb={3}>
              <Typography variant="h5" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: game.description }} />
            </Box>
            
            <Divider sx={{ my: 3 }} />

            {/* System Requirements */}
            <Box mb={3}>
              <Typography variant="h5" gutterBottom>
                System Requirements
              </Typography>
              
              {/*ISSUE:  We aren't able to get the system requirements for any game. FIX THAT */}
              {game.requirements ? (
                  <Grid container spacing={2}>
                    {game.requirements.minimum && (
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography variant="h6" gutterBottom color="primary">
                              Minimum
                            </Typography>
                            <Typography variant="body2" component="div" dangerouslySetInnerHTML={{ __html: game.requirements.minimum }} />
                          </CardContent>
                        </Card>
                      </Grid>
                    )}
                    {game.requirements.recommended && (
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography variant="h6" gutterBottom color="primary">
                              Recommended
                            </Typography>
                            <Typography variant="body2" component="div" dangerouslySetInnerHTML={{ __html: game.requirements.recommended }} />
                          </CardContent>
                        </Card>
                      </Grid>
                    )}
                  </Grid>
                ) : (
                  <Typography variant="body1" color="text-primary">
                    No system requirements available for this game.
                  </Typography>
                )}
            </Box>
          </Grid>

          {/* Right Side - Additional Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            
            <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
              <List disablePadding>
                <ListItem disablePadding sx={{ pb: 2 }}>
                  <ListItemText 
                    primary="Release Date" 
                    secondary={new Date(game.released).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })} 
                  />
                </ListItem>
                
                <Divider component="li" />
                
                <ListItem disablePadding sx={{ py: 2 }}>
                  <ListItemText 
                    primary="Official Website" 
                    secondary={
                      <Link href={game.website} target="_blank" rel="noopener noreferrer">
                        {game.website}
                      </Link>
                    } 
                  />
                </ListItem>                
                </List>
            </Paper>

            <Typography variant="h6" gutterBottom>
              Game ID: {game.id}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  </Container>
);
}
      


export default GameWithDetails