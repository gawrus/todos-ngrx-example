import { Inject, Injectable, LOCALE_ID } from "@angular/core";
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import { map } from "rxjs";
import { AppConfigurationActions } from "../actions/app-configuration.actions";

@Injectable()
export class AppConfigurationEffect {

    public initConfiguration$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            map(action => {
              return AppConfigurationActions.INIT_APP_CONFIGURATION({ locale: this.locale });
            })
        )
    );

    constructor(
        private readonly actions$: Actions,
        @Inject(LOCALE_ID) private readonly locale: string
    ) {}
}
