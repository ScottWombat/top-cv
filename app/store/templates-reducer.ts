import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {  Template } from "./default-exports";
import { initClassicTemplates, initModernTemplates, initAbstractTemplates } from './templates';

interface TemplatesState {
      classicTemplates: Template[] | [Template],
      modernTemplates: Template[] | [Template],
      abstractTemplates: Template[] | [Template],
}

const initialState: TemplatesState = {
      classicTemplates: initClassicTemplates,
      modernTemplates: initModernTemplates,
      abstractTemplates: initAbstractTemplates,
}
export const templatesSlice = createSlice({
      name: 'templates',
      initialState: initialState,
      reducers: {},
})

export const selectClassicTemplates = (state) => state.templates.classicTemplates;
export const selectModernTemplates = (state) => state.templates.modernTemplates;
export const selectAbstractTemplates = (state) => state.templates.abstractTemplates;


export default templatesSlice.reducer;
