import {ThunkAction, Action} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import store from './store';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export type CreateAsyncThunkConfig = {
	state: RootState;
	dispatch: AppDispatch;
};

export type QueryError = AxiosError;

export type AxiosQueryOptions = {
	getUrl: (url: string) => string;
};
