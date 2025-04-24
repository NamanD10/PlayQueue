import { useState } from "react"
import { GameInStorage, UserLists } from "../types"
import { getUserLists } from "../utils/localStorage";
import { Tab, Tabs, Typography, Box, Paper } from "@mui/material";
import SingularList from "./SingularList";


function UserListsPage() {
    const [value, setValue] = useState<keyof UserLists> ('Played');
    const games = getUserLists();
    const list : GameInStorage[] = games[value];

    const handleChange = (_event : React.SyntheticEvent, newValue: keyof UserLists)  => {
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
      <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column',
        p: 2,
      }}
    >
        <div>
          <Typography variant="h4" gutterBottom color="text.primary" >User Lists </Typography>
        </div>
        
        <Tabs value={value} onChange={handleChange}> 
          <Tab value={'Played'} label={'Played'}></Tab>
          <Tab value={'Playing'} label={'Playing'}></Tab>
          <Tab value={'Wishlist'} label={'Wishlist'}></Tab>
        </Tabs>

      <Paper elevation={3} sx={{ p: 3, mt: 2, widht:'500', height:'100vh', width:'100vw' }}>
      <Typography variant="h5" gutterBottom>
        {value} Games
      </Typography>   
      <SingularList list={list} />
      </Paper>          
    </Box>    

  )
}

export default UserListsPage