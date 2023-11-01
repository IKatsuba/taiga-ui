import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiResizerModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiExpandModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiModeModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiCheckboxModule,
    TuiDataListWrapperModule,
    TuiElasticContainerModule,
    TuiRadioModule,
    TuiSelectModule,
    TuiTabsModule,
} from '@taiga-ui/kit';

import {TuiDocCodeModule} from '../code/code.module';
import {TuiDocDemoComponent} from './demo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiSelectModule,
        TuiExpandModule,
        TuiTooltipModule,
        TuiModeModule,
        TuiSvgModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiResizerModule,
        TuiDocCodeModule,
        TuiElasticContainerModule,
        TuiTabsModule,
        TuiHostedDropdownModule,
        TuiRadioModule,
        TuiCheckboxModule,
    ],
    declarations: [TuiDocDemoComponent],
    exports: [TuiDocDemoComponent],
})
export class TuiDocDemoModule {}
