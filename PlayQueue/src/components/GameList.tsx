import { useEffect, useState } from "react"
import { Game } from "../types"
import GameCard from "./GameCard"
import gameService from "../api/gameService";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";



function GameList() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchGames = async() => {
      try{
        setLoading(true);
        const fetchedGames: Game[] = await gameService.getGames();
        setGames(fetchedGames);
        
      }finally{
        setLoading(false);
      }
    } 

    fetchGames();

  }, []);
  

  return (
    <div style={{margin:"10px", display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"16px"}}>
        
      {loading ? (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', margin:'auto'}}>
          <Typography variant="h5" >Loading Games.... </Typography>
          <CircularProgress /> 
        </div>
      ) : (
        <Box sx={{ p: 2, width: '100%', maxWidth: 1400, mx: 'auto',  }}>
          <Grid container spacing={3} justifyContent={"center"}>
            {games.map(game => <GameCard key={game.id} game={game} />)}
          </Grid>
        </Box>
        
      )}
    
    </div>
  )
}

export default GameList