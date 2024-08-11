import Nav from './components/Header';
import Highlights from './components/Highlights';
import { ChakraProvider } from '@chakra-ui/react';


function App() {

  return (
    <>
      <ChakraProvider>
        <Nav/>
        <Highlights/>
      </ChakraProvider>
    </>
  )
}

export default App
