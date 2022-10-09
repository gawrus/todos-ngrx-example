import { createAction, props } from '@ngrx/store';

export class AppConfigurationActions {
  public static readonly INIT_APP_CONFIGURATION = createAction(
    '[App Configuration] Initialize',
    props<{ locale: string }>()
  );
}
