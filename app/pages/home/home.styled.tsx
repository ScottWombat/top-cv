import { styled } from 'styled-components';
/*
export const HomeWrapper = styled.div`
   width:100%;
   height:100%;
   text-align:center;
   padding:0;

   display:grid;
   grid-template-rows: auto auto;
   z-index:2050;
`;
export const SloganSection = styled.div`
  text-align:center;
  font-size:2em;
`;
*/
export const Container = styled.div`
    display:grid;
grid-template-rows: 100px 200px;

`;
export const HomeWrapper = styled.div`
    justify-content: center; /* Centers horizontally */
    align-items: top;     /* Centers vertically */
    height: 50vh;   
    display: flex;
    margin-top:50px;
`;
export const HomeWrapper1 = styled.div`
    justify-content: center; /* Centers horizontally */
    align-items: top;     /* Centers vertically */
    height: 50vh;   
    display: flex;
    margin-top:250px;
`;
export const Box = styled.div`
    flex: 1;
`;


export const SloganSection = styled.div`
  text-align:center;
  font-size:2em;
`;