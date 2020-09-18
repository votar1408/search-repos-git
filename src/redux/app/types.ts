export const LOADING: string = 'LOADING';

export interface AppLoadingAction {
    type: typeof LOADING;
    payload: boolean;
}

export type AppAction = AppLoadingAction;

export interface AppState {
    loading: boolean;
}
