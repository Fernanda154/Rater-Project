import styled from "styled-components";
import React from "react";

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
    $bgImage?: React.ReactNode;
}
export const CardCarousel = styled.div<BackgroundProp>`
    width: 340px;
    height: 250px;
    border-radius: 24px;
    background-image:  url(${props => props.$bgImage});
    background-size: cover;
    background-position: center;
`;

export const LabelCard = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background-color: #00000080;
    padding: 1em;
    font-weight: 700;
    display: flex;
    align-items: end;
    h1{
        font-size: 24px;
        margin-top: 25%;
    }
    span{
        font-size: 14px;
        font-weight: 400;
        color: #B4B4B4;
        line-height: 40px;
        margin-left: 2px;;
    }
    &:hover{
        background: linear-gradient(192deg, rgba(0, 0, 0, 0.5) 15.12%, rgb(0 0 0) 100%);
        transition: transform 100s;
    }
`;
