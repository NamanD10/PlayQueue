import { alpha, AppBar, Box, InputBase, styled, Toolbar, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import debounce from 'lodash.debounce';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function NavBar() {
  
  const navigate = useNavigate();
  

  const debouncedNavigate = useMemo(
    () =>
      debounce((value: string) => {
        navigate(`/search?q=${encodeURIComponent(value)}`);
      }, 500),
    [navigate]
  );

  
  const handleSearchChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value; 
    debouncedNavigate(value);
  }


  return (
    
    <Box sx={{ flexGrow: 1, width:'100%' }}>
    <AppBar position="static" sx={{width:'100%'}}>
      <Toolbar> 

       
         <a href="/user">
         <PersonIcon />
         </a>
       
         
       <Typography 
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, mx:'12px' }}
          
        > 
        <a href="/"> 
          PlayQueue
        </a>
        </Typography>
        
        <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
              
            />
          </Search>
      
      </Toolbar>
    </AppBar>
    </Box>
)
}

export default NavBar