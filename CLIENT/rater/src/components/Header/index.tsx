import {Header, Logo, SearchInput, SearchWrapper, IconWrapper, IconFilter, ContainerSearch, BadgeWrapper, Badge, Menu, Chip} from './style';
import { Container, Divider, Input} from '@chakra-ui/react';
import LogoVector from '../../assets/logo.svg';
import { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import FormLogin from '../Forms/FormLogin';

export default function Nav(){
    const [visibleMenu, setVisibleMenu] = useState(false);
    const toggleMenu = () => {
        setVisibleMenu(prevState => !prevState);
    };

    return (
        <>
            <Header>
                <Logo src={LogoVector} alt='Logo Rater'/>
                <ContainerSearch>
                    <SearchWrapper>
                        <IconWrapper>
                            <Search size={20} color="#EEE" />
                        </IconWrapper>
                        <SearchInput
                            type="search"
                            placeholder="Pesquisar"
                        />                    
                    </SearchWrapper>
                    <IconFilter onClick={toggleMenu}>
                        <SlidersHorizontal size={20} color="#EEE" />
                        {1 > 0 && (
                            <BadgeWrapper>
                            <Badge>{3}</Badge>
                            </BadgeWrapper>
                        )}
                    </IconFilter>
                    <Menu $isVisible={visibleMenu}>
                        <h1>Gêneros Cinematográficos</h1>
                        <Container>
                            <Chip >
                                Ficção científica
                            </Chip>
                            <Chip>
                                Ação
                            </Chip>
                            <Chip>
                                Aventura
                            </Chip>
                            <Chip $variant='outline'>
                                Comédia
                            </Chip>
                            <Chip $variant='outline'>
                                Terror
                            </Chip>
                            <Chip $variant='outline'>
                                Romance
                            </Chip>
                            <Chip $variant='outline'>
                                Drama
                            </Chip>
                        </Container>

                        Mostrar mais <ChevronDown size={20} color="#EEE" />
                        <Divider />
                        <h1>Data de lançamento</h1>
                        <Container>
                            <Input size='sm' type='date' />
                            a
                            <Input size='sm' type='date' />
                        </Container>
                        
                    </Menu>
                </ContainerSearch>     
                <FormLogin/>           
            </Header>
        </>
    )
}