import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { loggerMiddleware } from '~/middleware/logger'

import cvReducer from './cv-reducer';
import pageReducer from './page-reducer'
import colorSchemeReducer from './color-scheme-reducer';
import templatesReducer from './templates-reducer';
import templateTypeReducer from './template-type-reducer'
const initialState = {};

const rootReducer = combineReducers({
       cv: cvReducer,
       page: pageReducer,
       colorScheme: colorSchemeReducer,
       templates: templatesReducer,
       templateType: templateTypeReducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware();
        if (import.meta.env.DEV) {
            middlewares.push(loggerMiddleware);
        }
        return middlewares;
    },
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState
})


export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']