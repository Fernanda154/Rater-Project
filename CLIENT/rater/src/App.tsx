import Nav from './components/Header';
import Highlights from './components/Highlights';
import LatestReleases from './components/LatestReleases';
import AlreadyWatched from './components/AlreadyWatched';
import { ChakraProvider } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <>
      <ChakraProvider>
        <Nav/>
        <Highlights/>
        <LatestReleases/>
        <AlreadyWatched/>
      </ChakraProvider>
    </>
  )
}

export default App
