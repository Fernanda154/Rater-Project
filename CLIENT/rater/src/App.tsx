import Nav from './components/Header';
import Highlights from './components/Highlights';
import LatestReleases from './components/LatestReleases';
import AlreadyWatched from './components/AlreadyWatched';
import Recommended from './components/Recommended';
import Celebrities from './components/Celebrities';
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
        <Recommended/>
        <Celebrities/>
        @ 2024 Rader. All rights reserved
      </ChakraProvider>
    </>
  )
}

export default App
