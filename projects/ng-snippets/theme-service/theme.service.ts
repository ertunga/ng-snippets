import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const enum Theme {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private activeThemeSubject = new BehaviorSubject<Theme>(Theme.DARK);
    public activeTheme$ = this.activeThemeSubject.asObservable();

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.set(Theme.DARK);
    }

    set(theme: Theme): void {
        if (theme === this.activeThemeSubject.getValue()) {
            return;
        }

        this.activeThemeSubject.next(theme);
        this.document.body.classList.remove('dark-theme', 'light-theme');
        this.document.body.classList.add(theme.toLowerCase() + '-theme');
    }
}
