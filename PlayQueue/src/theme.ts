import { createTheme } from "@mui/material";

const neonTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
          default: '#0f0f0f',
          paper: '#1a1a1a',
        },
        primary: {
          main: '#00adb5', // neon cyan
        },
        secondary: {
          main: '#ff2e63', // hot pink
        },
        text: {
          primary: '#f5f5f5', //white
          secondary: '#cfcfcf', //light grey
        },
      },

    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '12px',
              textTransform: 'none',
            },
          },
        },
    },
    
});

export default neonTheme;
