// Make a component to show the results of a search 
// Give an array of games as param and display them as a list of GameCard component

import { Box, Grid } from '@mui/material'
import { Game } from '../types'
import GameCard from './GameCard'


function SearchResults({results}: {results: Game[]}) {
   
    
  return (
    <div>
        <Box sx={{ p: 2, width: '100%', maxWidth: 1400, mx: 'auto',  }}>
          <Grid container spacing={3} justifyContent={"center"}>
            {results.map(game => <GameCard key={game.id} game={game} />)}
          </Grid>
        </Box>
    </div>
  )
}

export default SearchResults