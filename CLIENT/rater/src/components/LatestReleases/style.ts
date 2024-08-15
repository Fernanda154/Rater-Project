import styled from "styled-components";
export const ContainerLatest = styled.div`
    display: flex;
    padding: 0.5em 2em 0.5em 2em;
    background: #121212;
    display: flex;
    color: #FFF;
    flex-wrap: wrap;
    height: 400px;
    .slider-container{
        max-width: 100%;
        padding: 2em;
    }
    .slick-slide{
        margin: 0.5em;
    }
`;
interface BackgroundProp {
    $bgImage?: string;
}
export const CardCarousel = styled.div<BackgroundProp>`
    width: 340px;
    height: 250px;
    border-radius: 24px;
    background-image:  url(${props => props.$bgImage });
    background-size: cover;
    display: flex;
    align-items: end;
    background-position: center;
`;

export const LabelCard = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background-color: #00000080;
    padding: 1em;
    font-weight: 700;
    button{
        width: fit-content;
        font-size: 20px;
        padding: 8px;
    }
    #highlightto{
        background-color: #ffffff50;
        color: #EEE;
        font-weight: 700;
        font-size: 18px;
        height: 35px;
    }
    h1{
        font-size: 24px;
        margin-top: 25%;
    }
    &:hover{
        background: linear-gradient(192deg, rgba(0, 0, 0, 0.5) 15.12%, rgb(0 0 0) 100%);
        transition: transform 100s;
    }
`;
