'use client'

import {Card, CardContent, CardActions,  CardMedia, Typography, Button, CardActionArea, Rating, Chip, Menu, MenuItem, Snackbar, Alert } from '@mui/material';
import { Game, GameInStorage, UserLists } from '../types';
import { useNavigate } from 'react-router-dom';
import { addToList } from '../utils/localStorage';
import { useState } from 'react';


interface gameCardProps {
  game: Game 
}



function GameCard( {game} :gameCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [snackOpen , setSnackOpen] = useState(false);

  const handleCardClick = () => {
    navigate(`/game/${game.id}`);
  }

  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  
  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleAddClick = ( listName : keyof UserLists) => {
    const gameToAdd : GameInStorage = {id: game.id, name:game.name};
    const added = addToList(gameToAdd, listName);
    handleClose();
    if(!added){
      console.error('Could not add the game to list');
    } 
    else{
      setSnackOpen(true);
    }
  }
  

  return (
    
    <div>  
    <Card variant='outlined' sx={{ width: 250, height:300}} >
      <CardActionArea onClick={handleCardClick} >
        <CardMedia
          component="img"
          alt={game.name} 
          height="120"
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
        <Button size="small" onClick={handleClick}>
          Add
        </Button>
        
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          
          <MenuItem onClick={() => handleAddClick('Played')}>Played</MenuItem>
          <MenuItem onClick={() => handleAddClick('Playing')}>Playing</MenuItem>
          <MenuItem onClick={() => handleAddClick('Wishlist')}>Wishlist</MenuItem>

        </Menu>

        <Snackbar 
          open={snackOpen} 
          autoHideDuration={3000} 
          onClose={()=>{setSnackOpen(false)}} 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
          sx={{width:400}}>
            <Alert 
              severity='success' 
              onClose={()=>setSnackOpen(false)}
            > 
              Added To List 
            </Alert>
        </Snackbar>

      </CardActions>
    </Card>
    </div>
  )
}

export default GameCard