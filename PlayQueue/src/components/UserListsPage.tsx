import { useState } from "react"
import { GameInStorage, UserLists } from "../types"
import { getUserLists } from "../utils/localStorage";
import { Tab, Tabs, Typography, Box, Paper } from "@mui/material";
import SingularList from "./SingularList";


function UserListsPage() {
    const [value, setValue] = useState<keyof UserLists> ('Played');
    const games = getUserLists();
    const list : GameInStorage[] = games[value];

    const handleChange = (event : React.SyntheticEvent, newValue: keyof UserLists)  => {
      setValue(newValue);
    }
  
    if(!games){
      return(
        <>
          <Typography variant="h2">
            Can't get list of games
          </Typography>

          <Typography variant="body1">
            Kindly check your browser cache 
          </Typography>
        </>
      )
    }
    
    return (
    <>
        <div>
          <Typography variant="h2">User Lists </Typography>
        </div>
        
        <Tabs value={value} onChange={handleChange}> 
          <Tab value={'Played'} label={'Played'}></Tab>
          <Tab value={'Playing'} label={'Playing'}></Tab>
          <Tab value={'Wishlist'} label={'Wishlist'}></Tab>
        </Tabs>

      <Paper elevation={3} sx={{ p: 3, mt: 2, widht:'500' }}>
      <Typography variant="h5" gutterBottom>
        {value} Games
      </Typography>   
      <SingularList list={list} />
      </Paper>          
    </>    

  )
}

export default UserListsPage