import { Box, Container, Grid } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box>
    <Navbar/>
    <Grid sx={{display: "flex" , justifyContent: 'space-between'}}>
    <Sidebar sx={{}}/>
    <Feed/>
    <Rightbar/>
    </Grid>
    </Box>
  );
}

export default App;
