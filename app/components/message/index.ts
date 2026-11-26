import { styled, keyframes } from 'styled-components';

export const GreenMsg = styled.div`
    color:green;
    
    margin-top:3px;
    font-family:'Poppins';
    font-size:1rem;
    font-weight:600;
    letter-spacing: 2px;
    float:right;
    margin-top:2px;
   
`;

export const RedMsg = styled.div`
    color:#EE4B2B;
    font-family:'raleway';
    font-size:0.4rem;
    margin-top:5px;
    font-family:'Poppins';
    font-size:0.6rem;
    font-weight:600;
    letter-spacing: 2px;
    float:right;
   
`;

export const GreenMsg1 = styled.div`
   
     &::after {
    content: "\u2713";
    color:green;
    margin-left:130px;
    }
`;