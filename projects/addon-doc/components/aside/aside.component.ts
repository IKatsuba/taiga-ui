import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {Router} from '@angular/router';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_DOC_SCROLL_BEHAVIOR} from '@taiga-ui/addon-doc/tokens';

export interface TuiAsideMenu {
    id: string;
    title: string;
}

@Component({
    selector: 'tui-doc-aside',
    templateUrl: './aside.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocAsideComponent {
    menuList: readonly TuiAsideMenu[] = [];
    activeIndex = 0;

    @Input()
    set menu(menuList: readonly TuiAsideMenu[]) {
        this.menuList = menuList;
        this.activeIndex = this.getFragmentIndex();
    }

    constructor(
        @Inject(WINDOW) private readonly win: Window,
        @Inject(Router) private readonly router: Router,
        @Inject(TUI_DOC_SCROLL_BEHAVIOR) private readonly scrollBehavior: ScrollBehavior,
    ) {}

    onView(id: string): void {
        this.win.history.pushState(null, '', `${this.url.base}#${id}`);

        this.getElement(id)?.scrollIntoView({
            behavior: this.scrollBehavior,
            block: 'start',
            inline: 'start',
        });
    }

    private get url(): {base: string; fragment: string} {
        const [base, fragment] = this.router.url.split('#') ?? [];

        return {base, fragment};
    }

    private getElement(id: string): HTMLElement | null {
        return this.win.document.querySelector(`[id=${id}]`) || null;
    }

    private getFragmentIndex(): number {
        const index = this.menuList.findIndex(item => item.id === this.url.fragment);

        return index !== -1 ? index : 0;
    }
}
