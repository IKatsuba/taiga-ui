import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiAlertModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiModeModule,
    TuiRootModule,
    TuiThemeNightModule,
} from '@taiga-ui/core';

import {TuiDocAsideModule} from '../aside/aside.module';
import {TuiDocHeaderModule} from '../internal/header/header.module';
import {TuiDocNavigationModule} from '../navigation/navigation.module';
import {TuiDocMainComponent} from './main.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiThemeNightModule,
        TuiDocHeaderModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiButtonModule,
        TuiModeModule,
        TuiDocNavigationModule,
        TuiDocAsideModule,
        TuiLetModule,
    ],
    declarations: [TuiDocMainComponent],
    exports: [TuiDocMainComponent],
})
export class TuiDocMainModule {}
