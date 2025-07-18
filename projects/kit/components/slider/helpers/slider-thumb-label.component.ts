/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {AsyncPipe, NgIf} from '@angular/common';
import type {AfterContentInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, ContentChild} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiHintOptionsProvider} from '@taiga-ui/core/directives/hint';
import type {TuiSizeS} from '@taiga-ui/core/types';

import {TuiSliderComponent} from '../slider.component';

@Component({
    standalone: true,
    selector: '[tuiSliderThumbLabel]',
    imports: [AsyncPipe, NgIf],
    templateUrl: './slider-thumb-label.template.html',
    styleUrls: ['./slider-thumb-label.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiHintOptionsProvider({direction: 'top', appearance: 'dark'})],
})
export class TuiSliderThumbLabel implements AfterContentInit {
    @ContentChild(TuiSliderComponent)
    protected readonly slider?: TuiSliderComponent;

    @ContentChild(NgControl)
    protected readonly control?: NgControl;

    public ngAfterContentInit(): void {
        ngDevMode &&
            console.assert(
                Boolean(this.control?.valueChanges),
                '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\n' +
                    'Use [(ngModel)] or [formControl] or formControlName for correct work.',
            );
    }

    protected get size(): TuiSizeS {
        return this.slider?.size || 'm';
    }

    protected get ratio(): number {
        return this.slider?.valueRatio || 0;
    }

    protected get ghostStart(): number {
        return this.ratio * (this.slider?.el.offsetWidth || 0);
    }
}
