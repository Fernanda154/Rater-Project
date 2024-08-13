import { ContainerAlready } from './styled';
import { Text  } from '@chakra-ui/react';
import Button from '../Button';

export default function AlreadyWatched(){
    return (
        <>
            <ContainerAlready>
            <Text fontWeight={600} fontSize={24}>| Filmes assistidos</Text>
                <div className='info'>
                    <h1>
                        Ops, nenhum filme avaliado ainda.
                    </h1>
                    <Text mb={2}>Que tal adicionar um?</Text>
                    <Button name='Fazer login' color='#232323'/>
                </div>
                
            </ContainerAlready>
        </>
    );
};