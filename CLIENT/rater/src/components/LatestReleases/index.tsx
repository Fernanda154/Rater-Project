import { Text, Tag, TagLeftIcon, TagLabel  } from '@chakra-ui/react';
import Slider from 'react-slick';
import { Star, Play } from 'lucide-react';
import Button from '../Button';
import { ContainerLatest, LabelCard, CardCarousel } from './style';
import BannerExor from '../../assets/imgs/b5ddd4c77ac2add7eb566383eb306337.png';
import BannerTues from '../../assets/imgs/360386853fb20448d0f058be2dbe4904.png';
import BannerTode from '../../assets/imgs/3dacbe16cfef7913926ac510ce6bb15a.png';
import BannerMeup from '../../assets/imgs/9d54f1c5d7f6805520a89798c76d08c4.png';
import BannerPlan from '../../assets/imgs/f6d2e17d38080e9490c54aea8a7c396f.png';
import BannerLoga from '../../assets/imgs/cbcd885cc509e5a509db56953fc793ca.png';
import BannerOppe from '../../assets/imgs/944a8de46b04d28d624c8a02be491835.png';
import BannerGuer from '../../assets/imgs/c43188ddf1eb74c9bc61d3ed5e415d50.png';

const LatestReleases: React.FC = () => {
    const arrayFilm = [
        {
            title: 'O Exorcismo',
            rating: 4.1,
            image: BannerExor
        },
        {
            title: 'Tuesday - O Último Abraço',
            rating: 6.4,
            image: BannerTues
        },
        {
            title: 'Tô de Graça: O Filme',
            rating: 6.0,
            image: BannerTode
        },
        {
            title: 'Meu Pai é um Perigo',
            rating: 5.7,
            image: BannerMeup
        },
        {
            title: 'Planeta dos Macacos: O Reinado',
            rating: 7.0,
            image: BannerPlan
        },
        {
            title: 'Logan',
            rating: 8.1,
            image: BannerLoga
        },
        {
            title: 'Oppenheimer',
            rating: 8.3,
            image: BannerOppe
        },
        {
            title: 'Guerra Civil',
            rating: 7.1,
            image: BannerGuer
        },
    ];
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <>
            <ContainerLatest>
                <Text fontWeight={600} fontSize={24}>| Destaques também</Text>
                <div className="slider-container">
                    <Slider {...settings}>
                        {arrayFilm.map((film, index) => (
                            <CardCarousel key={index} $bgImage={film.image}>
                            <LabelCard>
                                <Tag id='highlightto' mr={2}>
                                <TagLeftIcon as={Star} fill='#EAB308' color='#EAB308'/>
                                <TagLabel>{film.rating}</TagLabel>
                                </Tag>
                                <Tag id='highlightto' w={9}>
                                <TagLeftIcon as={Star}/>
                                </Tag>
                                <h1>{film.title}</h1>
                                <Button name='Assistir ao trailer' color='#ffffff30' iconButtom={<Play fill='#EEE'/>}/>
                            </LabelCard>
                            </CardCarousel>
                        ))}
                    </Slider>
                </div>
            </ContainerLatest>
        </>
    );
};
export default LatestReleases;