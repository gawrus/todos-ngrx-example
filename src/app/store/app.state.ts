import { ActionReducerMap } from "@ngrx/store";
import { appConfigurationReducer, IAppConfigurationState } from "./reducers/app-configuration.reducer";
import * as fromRouter from '@ngrx/router-store';

export interface IAppState {
  appConfiguration: IAppConfigurationState;
  router: fromRouter.RouterReducerState<any>;
}


// ------App reducer to be provided in module ------//
export const reducers: ActionReducerMap<IAppState> = {
  appConfiguration: appConfigurationReducer,
  router: fromRouter.routerReducer
};
