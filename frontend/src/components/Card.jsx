import { Box } from '@mui/material'
import theme from '../utils/themes'
import { ThemeProvider } from '@emotion/react'

export default function Card(props) {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ '&:hover': { bgcolor: theme.palette.background.main.deepPurple900, cursor: 'pointer' }, fontSize: 20, bgcolor: theme.palette.background.main.deepPurple600, color: '#ffffff', p: 4, borderRadius: 4, maxWidth: 600, textAlign: 'center' }} onClick={props.onClick}> 
       {props.name}   
        </Box>
    </ThemeProvider>
  )
}