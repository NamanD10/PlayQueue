'use client'
//import  Card   from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import {Card, CardContent, CardActions,  CardMedia, Typography, Button, CardActionArea } from '@mui/material';



function GameCard() {
  return (
    <div>
      GameCard
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
        component="img"
        alt="God of War"
        height="140"
        src="PlayQueue\src\assets\GoW_Poster.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          God of War 2018
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          God of War is a fictional story mode game based on the Greek mythological figure Kratos. In this installment of the series Kratos goes on an adventure with a special guest
        </Typography>
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