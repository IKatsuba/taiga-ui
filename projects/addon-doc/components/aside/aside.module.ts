import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';

import {TuiDocExampleModule} from '../example/example.module';
import {TuiDocAsideComponent} from './aside.component';

@NgModule({
    imports: [
        TuiTabsModule,
        CommonModule,
        RouterModule,
        TuiLinkModule,
        TuiLetModule,
        TuiDocExampleModule,
    ],
    declarations: [TuiDocAsideComponent],
    exports: [TuiDocAsideComponent],
})
export class TuiDocAsideModule {}
