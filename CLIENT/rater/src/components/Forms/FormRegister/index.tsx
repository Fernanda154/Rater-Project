import {
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  FormControl,
  FormLabel,
  Input,
  Link,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import Button from '../../Button';
import { FormContainer } from '../FormLogin/style';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function FormRegister(){
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <FormContainer>
          
      </FormContainer>
    )
};