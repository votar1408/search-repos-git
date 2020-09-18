import {AppState} from './app/types';

export interface RootAppState {
    app: AppState;
}

interface RootState extends RootAppState {}

export const selectApp = (state: RootState) => state.app;
