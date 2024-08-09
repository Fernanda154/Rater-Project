import styled from "styled-components";

export const Header = styled.header`
    width: 97.5%;
    padding: 24px;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 128px;
    display: flex;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 99px;
  background-color: #191919;
  width: 317px;
  height: 48px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background-color: #232323;
  padding: 13px;
  border-radius: 99px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 4px 12px 4px 60px;
  border: none;
  border-radius: 99px;
  height: 100%;
  font-size: 16px;
  color: #313131;
  font-weight: 400;
  line-height: 19.36px;
  background-color: #191919; 
  outline: none;

  &:focus {
    color: white;
  }
`;

export const ContainerSearch = styled.div`
    display: flex;
`;

export const IconFilter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  background-color: #232323;
  padding: 13px;
  border-radius: 99px;
  position: relative; 
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  top: -5px;
  left: -5px;
  background-color: #6E6E6E;
  color: white; 
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;

export const Badge = styled.span`
  display: inline-block;
`;