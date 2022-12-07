import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import { VideoDetail , ChannelDetail , SearchFeed, Navbar, Feed } from './components';
function App() {
  return (
      <BrowserRouter>
        <Box className='bg-black'>
          <Navbar/> 
            <Routes>
              <Route path="/" exact element={<Feed/>}/>
              <Route path='/video/:id' exact element={<VideoDetail/>} />
              <Route path='/channel/:id' exact element={<ChannelDetail/>} />
              <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
            </Routes>
        </Box>
      </BrowserRouter>
      
  );
}

export default App;
