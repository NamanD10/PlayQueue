import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import GameList from './components/GameList'
import GameWithDetails from './components/GameWithDetails'
import UserListsPage from './components/UserListsPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GameList/>}> </Route>
        <Route path='/game/:id' element={<GameWithDetails/>}> </Route>
        <Route path='/user' element={<UserListsPage/>}> </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
