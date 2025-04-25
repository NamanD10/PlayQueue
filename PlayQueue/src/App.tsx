import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import GameList from './components/GameList'
import GameWithDetails from './components/GameWithDetails'
import NavBar from './components/NavBar'
import UserListsPage from './components/UserListsPage'
import SearchPage from './components/SearchPage'
import { ThemeProvider } from '@mui/material'
import neonTheme from './theme'

function App() {

  return (
    <>
    <ThemeProvider theme={neonTheme}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<GameList/>}> </Route>
        <Route path='/game/:id' element={<GameWithDetails/>}> </Route>
        <Route path='/user' element={<UserListsPage/>}> </Route>
        <Route path='/search' element={<SearchPage/>}> </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>  
    </>
  )
}

export default App
