import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private activeThemeSubject = new BehaviorSubject<string | undefined>(undefined);
    activeTheme$ = this.activeThemeSubject.asObservable();

    constructor(@Inject(DOCUMENT) private document: Document) {}

    get activeTheme(): string | undefined {
        return this.activeThemeSubject.getValue();
    }

    set(theme: string): void {
        if (theme === this.activeTheme) {
            return;
        }

        this.activeThemeSubject.next(theme);

        this.document.documentElement.classList.forEach((token: string) => {
            if (token.endsWith('-theme')) {
                this.document.documentElement.classList.remove(token);
            }
        });
        this.document.documentElement.classList.add(theme + '-theme');
    }
}
