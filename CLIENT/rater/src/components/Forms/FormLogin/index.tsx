import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Text,
  FormControl,
  FormLabel,
  Input,
  Link,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import Button from '../../Button';
import { FormContainer } from './style';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function FormLogin(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(false);
    const [formRegister, setFormRegister] = useState(false);

    const handleClickRegister = () => setFormRegister(!formRegister);
    const handleClick = () => setShow(!show);
  
    return (
      <FormContainer>
        <Button name='Login' onClick={onOpen}/>
        <Modal isOpen={isOpen} id='modal'  onClose={onClose} isCentered>
          <ModalOverlay bgColor={'#00000099'} filter='auto' blur='2px'/>

          {
          formRegister?
            <ModalContent p={12}  backgroundColor={'#121212'} color={"#EEE"} alignItems={'center'} borderRadius={'24px'} border={'4px'} borderColor={'#232323'}>
              <ModalHeader  fontSize={'32px'} fontWeight={600} paddingBottom={0}>Crie sua conta</ModalHeader>  
              <Text fontSize={'14px'} fontWeight={400}>Insira seus dados para completar o cadastro.</Text>         
              <ModalBody  w={'100%'} mt={8}  fontSize={'14px'}>
                <FormControl >
                  <FormLabel  fontSize={'14px'}>Nome completo*</FormLabel>
                  <Input  bgColor={'#313131'} color='#EEE' placeholder='Digite seu nome' border={'none'} type='text' />

                  <FormLabel  fontSize={'14px'} mt={4}>E-mail</FormLabel>
                  <Input  bgColor={'#313131'} color='#EEE' placeholder='Digite seu email' border={'none'} type='email' />

                  <FormLabel mt={4}  fontSize={'14px'}>Senha*</FormLabel>
                  <InputGroup size='md' mb={4}>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      color='#EEE'
                      placeholder='Digite sua senha'
                      bgColor={'#313131'} mb={4} border={'none'} 
                    />
                    <InputRightElement width='4.5rem'>
                      {show ? <EyeOff onClick={handleClick} color='#EEE'/> : <Eye onClick={handleClick} color='#EEE'/>}
                    </InputRightElement>
                  </InputGroup>

                  <FormLabel mt={4}  fontSize={'14px'}>Confirmar senha*</FormLabel>
                  <InputGroup size='md' mb={4}>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      color='#EEE'
                      placeholder='Digite sua senha'
                      bgColor={'#313131'} mb={4} border={'none'} 
                    />
                    <InputRightElement width='4.5rem'>
                      {show ? <EyeOff onClick={handleClick} color='#EEE'/> : <Eye onClick={handleClick} color='#EEE'/>}
                    </InputRightElement>
                  </InputGroup>
                  <Button name='Cadastrar' id='login' color='#FFF' style={{width: '100%', color: '#000'}}/>
                </FormControl>
                <Text mt={8}>Já tem uma conta? <Link color="white"  onClick={handleClickRegister}fontWeight={'bold'} isExternal> Fazer login </Link>. </Text>
              </ModalBody>           
            </ModalContent>
            :
            <ModalContent p={12} h={'545px'} backgroundColor={'#121212'} color={"#EEE"} alignItems={'center'} borderRadius={'24px'} border={'4px'} borderColor={'#232323'}>
              <ModalHeader  fontSize={'32px'} fontWeight={600} paddingBottom={0}>Acesse sua conta</ModalHeader>  
              <Text fontSize={'14px'} fontWeight={400}>Bem vindo de volta! Entre com seus dados.</Text>         
              <ModalBody  w={'100%'} mt={8}  fontSize={'14px'}>
                <FormControl >
                  <FormLabel  fontSize={'14px'}>E-mail</FormLabel>
                  <Input  bgColor={'#313131'} color='#EEE' placeholder='Digite seu email' border={'none'} type='email' />
                  <FormLabel mt={4}  fontSize={'14px'}>Senha</FormLabel>
                  <InputGroup size='md' mb={8}>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      color='#EEE'
                      placeholder='Digite sua senha'
                      bgColor={'#313131'} mb={4} border={'none'} 
                    />
                    <InputRightElement width='4.5rem'>
                      {show ? <EyeOff onClick={handleClick} color='#EEE'/> : <Eye onClick={handleClick} color='#000'/>}
                    </InputRightElement>
                  </InputGroup>
                  <Button name='Fazer login' id='login' color='#232323' style={{width: '100%'}}/>
                </FormControl>
                <Text mt={8}>Não tem uma conta ainda? <Link onClick={handleClickRegister} color="white" fontWeight={'bold'} isExternal> Criar conta</Link>. </Text>
              </ModalBody>           
            </ModalContent>
          }
        </Modal>
      </FormContainer>
    )
};