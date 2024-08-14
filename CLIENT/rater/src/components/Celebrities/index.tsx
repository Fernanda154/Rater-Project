import { Text  } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ContainerLatest, LabelCard, CardCarousel } from './style';
import Banner1 from '../../assets/imgsCelebrities/83a3a094a4f986d76792874cd1c9e351.png';
import Banner2 from '../../assets/imgsCelebrities/8c76d8109af460c9053d02919c30ab63.png';
import Banner3 from '../../assets/imgsCelebrities/ab796edefc922fcdaa9281825b779095.png';
import Banner4 from '../../assets/imgsCelebrities/8f48b0319de1f45e22b25e7ff73a55ad.png';
import Banner5 from '../../assets/imgsCelebrities/7737f5f9564e1a8ebd2cd912dfd646eb.png';

const Celebrities: React.FC = () => {
    const celebritiesFilm = [
        {
            title: 'Ryan Reynolds',
            image: Banner1
        },
        {
            title: 'Robert Downey',
            image: Banner2
        },
        {
            title: 'Hugh Jackman',
            image: Banner3
        },
        {
            title: 'Zendaya',
            image: Banner4
        },
        {
            title: "Dylan O'Brien",
            image: Banner5
        }
       
    ];
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 6
    };
    return (
        <>
            <ContainerLatest>
                <Text fontWeight={600} fontSize={24}>| Celebridades</Text>
                <div className="slider-container">
                    <Slider {...settings}>
                        {celebritiesFilm.map((celebrities, index) => (
                            <CardCarousel key={index} $bgImage={celebrities.image}>
                                <LabelCard>
                                    <h1>{celebrities.title}</h1>
                                    <span>27</span>
                                </LabelCard>
                            
                            </CardCarousel>
                        ))}
                    </Slider>
                </div>
            </ContainerLatest>
        </>
    );
};
export default Celebrities;