import styled from "styled-components";

export const ContainerHighlights = styled.div`
    display: flex;
    padding: 12px;
    background: #121212;
    display: flex;
    color: #FFF;
    flex-wrap: wrap;
    align-content: flex-end;
    
 
    .chakra-image{
        border-radius: 24px;
        height: 100%;
    }
    .opacity{
        opacity: 50%;
    }
    .css-1chvsbf{
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        align-content: flex-end;
    }   
    #move{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    } 
    
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
        line-height: 48.41px;
        margin-top: 25%;
    }
    &:hover{
        background: linear-gradient(192deg, rgba(0, 0, 0, 0.5) 15.12%, rgb(0 0 0) 100%);
        transition: transform 100s;
    }
`;

export const InfoDetails = styled.div`
    background: linear-gradient(192deg, rgba(0, 0, 0, 0) 32.12%, rgb(0 0 0) 100%);
    border-radius: 22px;
    display: flex;
    align-content: flex-end;
    font-weight: 700;
    flex-direction: column;
    width: 100%;
    color: white;
    height: 100%;
    justify-content: flex-end;
    padding: 2em;
   
    #highlight{
        background-color: #ffffff30;
    }
    .chakra-text{
        display: flex;
        align-items: center;
        max-width: 65%;
        line-height: 22.4px;
        font-weight: 500;
    }
    .lucide-star{
        margin-right: 8px;
    }
    h1{
        font-size: 40px;
        font-weight: 700;
        line-height: 48.41px;
    }
    button{
        width: fit-content;
        font-size: 20px;
        padding: 8px;
        margin-top: 4%;
        margin-bottom: 5%;
    }

    &:hover{
        background: linear-gradient(192deg, rgba(0, 0, 0, 0) 15.12%, rgb(0 0 0) 100%);
        transform: translateY(0);
        transition: transform 100s;
        #move{
            transition: transform 2s;
            transform: translateY(-10px);
        }
    }

`;
