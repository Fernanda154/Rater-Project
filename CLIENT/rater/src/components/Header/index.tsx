import {Header, Logo, SearchInput, SearchWrapper, IconWrapper, IconFilter, ContainerSearch, BadgeWrapper, Badge} from './style';
import LogoVector from '../../assets/logo.svg';
import { Search, SlidersHorizontal } from 'lucide-react';
import Button from '../Button';

export default function Nav(){
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
                    <IconFilter>
                        <SlidersHorizontal size={20} color="#EEE" />
                        {1 > 0 && (
                            <BadgeWrapper>
                            <Badge>{3}</Badge>
                            </BadgeWrapper>
                        )}
                    </IconFilter>
                </ContainerSearch>                
                <Button name='Login' />
            </Header>
        </>
    )
}