import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Navigate, useNavigate } from "react-router-dom";
import { GameInStorage, UserLists } from "../types"

 
function SingularList( {list} : { list: GameInStorage[]} ) {
    const navigate = useNavigate()
    const handleClick = (id: number) => {
    navigate(`/game/${id}`);
    }
   
     
  return (
    <>
    <List>
    {list.map((game) => (
          <ListItemButton key={game.id} onClick={() => handleClick(game.id)}>
            <ListItemText primary={game.name} />
          </ListItemButton>
        ))
    }
        
    </List>
    </>
  )

}

export default SingularList