import { Grid, GridItem, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react';
import {ContainerHighlights, InfoDetails, LabelCard} from './style';
import { Flame, Star, Play } from 'lucide-react';
import Button from '../Button';
import Banner from '../../assets/imgs/1f9d6fb5cbfbb6016c73896b67fe9d7a.png';
import BannerDivertidamente from '../../assets/imgs/4303be4007bd45ff83a73f43bbba7503.png';
import BannerMalvado from '../../assets/imgs/7da49e45d7502d9f63c2859bf74fcce9.png';
import BannerTwisters from '../../assets/imgs/a037cb4d59865e40c4e8b3e373b40e62.png';

export default function Highlights(){
    return (
        <ContainerHighlights>
            <Grid templateColumns='repeat(4, 1fr)' templateRows='29px repeat(3, 1fr)' gap={4} p={3}>
                <GridItem rowSpan={4} colSpan={3} bgImage={Banner} borderRadius={24} bgRepeat={'no-repeat'} bgSize={'cover'}  >
                    <InfoDetails >
                        <div id='move'>
                            <Tag size='xl' padding={'8px'} fontSize={'20px'} w={'fit-content'} color={'#EEE'} id='highlight' >
                                <TagLeftIcon as={Flame} />
                                <TagLabel>Em destaque</TagLabel>                    
                            </Tag>
                            <h1>Deadpool & Wolverine</h1>
                            <Text>
                                <Star fill='#EAB308' color='#EAB308' /> 8.2 | 120mil  2h 8m - Comedy, Action, Adventure, Superhero... - 2024
                            </Text>
                            <Text>
                                Deadpool recebe uma oferta de Autoridade de Variância Temporal para se juntar ao Universo Cinematográfico Marvel, mas em vez disso recruta uma variante do Wolverine para salvar seu universo em extinção.
                            </Text>
                        </div>
                        <Button name='Assistir ao trailer' color={'#ffffff30'} iconButtom={<Play fill='#EEE'/>}/>
                    </InfoDetails>
                </GridItem>
                <GridItem h='auto'>
                    <Text fontWeight={600} fontSize={24}>| Destaques também</Text>
                </GridItem>
                <GridItem w='100%' borderRadius={24} bgImage={BannerDivertidamente } bgRepeat={'no-repeat'} bgSize={'cover'}>
                    <LabelCard>
                        <Tag id='highlightto' mr={2} >
                            <TagLeftIcon as={Star} fill='#EAB308' color='#EAB308'/>
                            <TagLabel>7.8</TagLabel>                    
                        </Tag>
                        <Tag  id='highlightto' w={9}>
                            <TagLeftIcon as={Star}/>                 
                        </Tag>
                        <h1>Divertidamente 2</h1>
                        <Button name='Assistir ao trailer' color={'#ffffff30'} iconButtom={<Play fill='#EEE'/>}/>
                    </LabelCard>
                </GridItem>
                <GridItem w='100%' borderRadius={24} bgImage={BannerMalvado } bgRepeat={'no-repeat'} bgSize={'cover'}>
                    <LabelCard>
                        <Tag id='highlightto' mr={2} >
                            <TagLeftIcon as={Star} fill='#EAB308' color='#EAB308'/>
                            <TagLabel>6.3</TagLabel>                    
                        </Tag>
                        <Tag  id='highlightto' w={9}>
                            <TagLeftIcon as={Star}/>                 
                        </Tag>
                        <h1>Meu malvado favorito 4</h1>
                        <Button name='Assistir ao trailer' color={'#ffffff30'} iconButtom={<Play fill='#EEE'/>}/>
                    </LabelCard>
                </GridItem>
                <GridItem w='100%' borderRadius={24} bgImage={BannerTwisters } bgRepeat={'no-repeat'} bgSize={'cover'}>
                    <LabelCard>
                        <Tag id='highlightto' mr={2} >
                            <TagLeftIcon as={Star} fill='#EAB308' color='#EAB308'/>
                            <TagLabel>7.8</TagLabel>                    
                        </Tag>
                        <Tag  id='highlightto' w={9}>
                            <TagLeftIcon as={Star}/>                 
                        </Tag>
                        <h1>Twisters</h1>
                        <Button name='Assistir ao trailer' color={'#ffffff30'} iconButtom={<Play fill='#EEE'/>}/>
                    </LabelCard>
                </GridItem>
            </Grid>
        </ContainerHighlights>
        
    )
};