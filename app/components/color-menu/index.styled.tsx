import { styled,keyframes } from 'styled-components';

interface ColorProps{
    hexcode?: string;
    selected?: boolean;
    //onClick?: () => void;
}


export const Colors = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px;
    height:30px;
    width:250px;
    margin-left:0px;
    padding:0px;
`
export const Color = styled.div.attrs<ColorProps>((props:ColorProps) => ({
    hexcode: props.hexcode,
    selected: props.selected
}))`
  width: 25px;
  height: 25px;
  margin: 0px;
  background-color:  ${(props:ColorProps) => props.hexcode}; 
  border: ${props => props.selected ? `2px solid #ccc` : '2px solid #fff'};
  box-shadow: ${(props:ColorProps) => props.selected ? 'inset 0px 0px 0px 2px white' : '0px'};
  border-radius: 50%;
  position: relative;
`;
export const Color1 = styled.div<ColorProps>`
  width: 25px;
  height: 25px;
  margin: 2px;
  background-color: ${(props:ColorProps) => props.hexcode};
  border: ${(props:ColorProps) => props.selected ? `2px solid ${props.hexcode}` : '0px'};
  box-shadow: ${(props:ColorProps) => props.selected ? 'inset 0px 0px 0px 2px white' : '0px'};
  border-radius: 100%;
  position: relative;
  color: #5d5d5d;
`;