import {styled,  keyframes } from 'styled-components';

export const CreateContainer = styled.div`
    display:flex;
    width:100%;
    gap:150px;
`;
export const LeftColumn = styled.div`
    flex: 0 0 550px;;
`;
export const RightColumn = styled.div`
    flex: 1;
`;
export const RightContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
`
export const Row1 = styled.div`
 flex: 0 0 auto;
 
`;
export const Row2 = styled.div`
 flex: 1;

`;
export const Left = styled.div`
    float:left;
    padding: 20px 20px 20px 0;
`
export const Right1 = styled.div`
    float:left;
    padding:15px;
   
    margin-left:350px;
`;
export const Right = styled.div`
    float:left;
    padding:20px;
  
`;

export const ColorWrapper = styled.div`
    display:flex;
`;
export const ColorLabel = styled.div`
    margin-top:4px;
    margin-right:5px;
    font-color: #333;
    font-weight:600;
`;

export const StepsSection = styled.div`
   width: 100%;
   margin-left: 25px;
   display: flex;
   flex-direction: column; 
   margin-top:25px;
   color: #000;
   @media (max-width: 768px) {
        margin-top: 100px;
    }
`;

export const Header = styled.div`
    display: flex;
    width: 300px;
    float:left;
    background-color:#fff;
    font-family: 'Anton';
    letter-spacing: 1px;
    margin-top: -25px;
`
export const Name = styled.div`
    float: left;
    margin-right:10px;
     letter-spacing: 1px;
    @media (max-width: 768px) {
        font-size:0.8rem;
    }
`
export const StepName = styled.div`
    float: left;
    margin-left:10px;
    @media (max-width: 768px) {
        font-size:0.8rem;
    }
`

export const Circle = styled.div`
  width: 30px;             /* Set dimensions */
  height: 30px;
  background-color: #fff;
  border:  3px solid #ff6b6b;
  color: #000;
  border-radius: 50%;      /* Makes the box a perfect circle */
  display: flex;           /* Flexbox centers the number perfectly */
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding-top:0px;
  margin-top: -2px;
  @media (max-width: 768px) {
        font-size:0.8rem;
        width: 25px;             /* Set dimensions */
        height: 25px;
  }
`





