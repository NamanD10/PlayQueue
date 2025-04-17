'use client'

import {Card, CardContent, CardActions,  CardMedia, Typography, Button, CardActionArea, Rating, Chip } from '@mui/material';
import Game from '../types';

interface gameCardProps {
  game: Game 
}

function GameCard( {game} :gameCardProps) {
  
  return (
    <div>
      
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
        component="img"
        alt={game.name} 
        height="140"
        src= {game.backgroundImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Rating value={game.rating} readOnly />
        
        
        
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Add</Button>
        
      </CardActions>
    </Card>
    </div>
  )
}

export default GameCard