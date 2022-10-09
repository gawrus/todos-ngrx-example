import { Action, createReducer, on } from '@ngrx/store';
import { AppConfigurationActions } from '../actions/app-configuration.actions';

export interface IAppConfigurationState {
  locale: string;
  dateFormat: string;
}


export const appConfigurationInitialState: IAppConfigurationState = {
    locale: 'en-US',
    dateFormat: 'dd-MMM-yyyy',
};

const reducer = createReducer(
    appConfigurationInitialState,
    on(AppConfigurationActions.INIT_APP_CONFIGURATION,
        (state, action) => ({ ...state, locale: action.locale })
    )
);

export function appConfigurationReducer(state: IAppConfigurationState | undefined, action: Action): IAppConfigurationState {
    return reducer(state, action);
}
