import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%; 
`

export const Img = styled.img`
  ${fadeIn('10s')}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
export const Card = styled.article`
  margin: 15px auto;
  background-color: #E9E9E9;
  width: 90%;
  border-radius: 10px;
  padding: 2px;
  box-shadow: 1px 1px 34px -7px rgba(0,0,0,0.58);
  -webkit-box-shadow: 1px 1px 34px -7px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 34px -7px rgba(0,0,0,0.58);
`;