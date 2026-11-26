import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Color{
    id:number,
    selected: boolean,
    hex1: string,
    hex2: string,
    hex3: string,
    hex4: string,
    hex5: string
}
interface Pattern{
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    p5: string,
    p6: string,
}
interface ColorSchemeState{
    defaultColor: Color,
    pattern: Pattern,
    colors: Color[]
}

const initialState = {
    //defaultColor: {id:1,selected: true,hex1:'#FDC6BD',hex2:'#f2af7f',hex3:'#fff3f2',hex4:'#fffeff'},
    defaultColor:  {id:1,selected: true, hex1:'#fa735e',hex2: '#ff917f',hex3:'#ffae9f',hex4: '#ffc9be',hex5:'#ffe4df'},
    pattern:  {p1:'#fa735e',p2: '#008000',p3:'#0654d2',p4: '#807d7d',p5:'#8c3838',p6:'#35063e'},
    colors: [
        {id:1,selected: true, hex1:'#fa735e',hex2: '#ff917f',hex3:'#ffae9f',hex4: '#ffc9be',hex5:'#ffe4df'},
        {id:2,selected: false,hex1:'#008000',hex2: '#4c9a47',hex3:'#7ab375',hex4: '#a6cca3',hex5:'#d2e6d0'},
        {id:3,selected: false,hex1:'#0654d2',hex2: '#417ade',hex3:'#709ce9',hex4: '#9fbdf2',hex5:'#cedef9'},
        {id:4,selected: false,hex1:'#807d7d',hex2: '#989696',hex3:'#b1afaf',hex4: '#cac9c9',hex5:'#e4e4e4'},
        {id:5,selected: false,hex1:'#8c3838',hex2: '#8c3838',hex3:'#be8683',hex4: '#d4adab',hex5:'#ead6d4'},
        {id:6,selected: false,hex1:'#35063e',hex2: '#5b3662',hex3:'#826588',hex4: '#aa96ae',hex5:'#d4c9d6'}
    ]
}
export const colorSchemeSlice = createSlice({
    name: 'colorScheme',
    initialState,
    reducers: {
         updateColorScheme: (state,action) =>{
                  state.colors = state.colors.map((color) =>{
                        if(color.id === action.payload){
                            return {...color,selected: true}
                        }else{
                            return {...color,selected: false}
                        }
                            
                  });
        },
    }
})
export const { updateColorScheme } = colorSchemeSlice.actions;
export const getColorPattern = ( state:ColorSchemeState ) => state.pattern;
export const getDefaultColor = ( state) => state.colorScheme.defaultColor;
//export const getColors= (state:ColorSchemeState) => state.colorScheme.colors;
export const getColors= (state) => state.colorScheme.colors;
export default colorSchemeSlice.reducer;