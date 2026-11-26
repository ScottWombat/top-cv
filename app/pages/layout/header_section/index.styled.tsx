import { styled ,keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeaderWrapper = styled.div`
    display:grid;
    width:100%;
    grid-template-columns: 38% 62%;
    background-color:#ccc;
`;

export const HeaderColumn1 = styled.div`
    width:100%;
    background-color:#fff;
`;
export const HeaderColumn2 = styled.div`
    width:100%;
    background-color:#fff;
`;
export const HeaderLeft = styled.div`
    float: left;
    width:50%;
`;

export const HeaderRight = styled.div`
    float: right;
    width:100%;

`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;      /* Places items side-by-side horizontally */
  align-items: baseline;    /* Aligns the bottom of the text letters cleanly */
  margin-top:15px;
  margin-left:15px;
  width:100%;
  font-size:2em;
`;

export const CV = styled.div`
   font-size: 2.2rem; 
   font-family:'Anton';
   letter-spacing:5px;
`;
export const First = styled.div`
    font-size: 2rem;
    color: #fb8245;
     font-family:'CSRegular';
`;

export const Slogan = styled.div`
    font-size: 0.6rem;
    font-family: 'EightOne';
    letter-spacing:3px;
    font-weight: bold;
    margin-top:-7px;
    margin-left:18px;
    animation: ${fadeIn} 2.5s ease-in forwards;
`;




