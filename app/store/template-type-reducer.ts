import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface TemplateTypeState{
    typename: string
}
const initialState: TemplateTypeState={
    typename: "abstract"
}
export const templateTypeSlice = createSlice({
      name: 'templatetype',
      initialState,
      reducers: {
        updateTemplateType: (state,action: PayloadAction<TemplateTypeState>)=>{
            state.typename = action.payload.typename
        }
      },
})


export const actions =templateTypeSlice.actions;

export const {
      updateTemplateType
} = templateTypeSlice.actions;



export const selectTemplateType= (state) => state.templateType.typename;


export default templateTypeSlice.reducer;
