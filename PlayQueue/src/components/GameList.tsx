import { useEffect, useState } from "react"
import Game from "../types"
import GameCard from "./GameCard"
import gameService from "../api/gameService";



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
        <p>Loading games...</p>
      ) : (
        games.map(game => <GameCard key={game.id} game={game} />)
      )}
    
    </div>
  )
}

export default GameList