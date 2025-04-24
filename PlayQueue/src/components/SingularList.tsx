import { Box, List, ListItemButton, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { GameInStorage } from "../types"

 
function SingularList( {list} : { list: GameInStorage[]} ) {
    const navigate = useNavigate()
    const handleClick = (id: number) => {
    navigate(`/game/${id}`);
    }
   
     
  return (
    <Box>
    <List>
    {list.map((game) => (
          <ListItemButton key={game.id} onClick={() => handleClick(game.id)}>
            <ListItemText primary={game.name} />
          </ListItemButton>
        ))
    }
        
    </List>
    </Box>
  )

}

export default SingularList