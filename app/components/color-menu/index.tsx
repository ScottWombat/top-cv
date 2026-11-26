import { useState} from 'react';
import { Colors,Color } from './index.styled';
import { useAppSelector, useAppDispatch } from '~/store/hooks';
import { getColors } from '~/store/color-scheme-reducer';
//mport {updateColorScheme} from '@store/color-scheme-reducer'

//import { AppDispatch } from '@store/index';
//import { getDefaultColor,getColors } from '@store/color-scheme-reducer';
//import { getPageMargin } from '@progress/kendo-react-pdf';
const ColorMenu = () =>{
    //const [defaultColor,setDefaultColor] = useState({})
    const dispatch = useAppDispatch();
    const colors = useAppSelector(getColors);
    //const colors = useAppSelector(getColors);
    const [colorSelected,setColorSelected] = useState(1)
  
    const onClick = (index) =>{
       
       let color = colors[index]
       setColorSelected(color.id)
       //dispatch(updateColorScheme(color.id))
       //props.colorOnSelected(color)
    }
    return(
        <Colors>
        
         {colors.map((color,index) => (
          
             <Color key={index} hexcode={color.hex1} selected={color.id == colorSelected} onClick={() => onClick(index)}/>
          ))}
          
        </Colors>
    )
}

export default ColorMenu;