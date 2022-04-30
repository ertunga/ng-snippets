import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private activeThemeSubject = new BehaviorSubject<string | undefined>(undefined);
    public activeTheme$ = this.activeThemeSubject.asObservable();

    get activeTheme(): string | undefined {
        return this.activeThemeSubject.getValue();
    }

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.set('light');
    }

    set(theme: string): void {
        if (theme === this.activeTheme) {
            return;
        }

        this.activeThemeSubject.next(theme);

        this.document.body.classList.forEach((token: string) => {
            if (token.endsWith('-theme')) {
                this.document.body.classList.remove(token);
            }
        });
        this.document.body.classList.add(theme + '-theme');
    }
}
