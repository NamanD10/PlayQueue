import GameCard from "./GameCard"


function GameList() {
  return (
    <div style={{margin:"10px", display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"16px"}}>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />

    </div>
  )
}

export default GameList