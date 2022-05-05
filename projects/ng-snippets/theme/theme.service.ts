import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeConfig, THEME_CONFIG, Theme } from './tokens';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private activeThemeSubject = new BehaviorSubject<string | undefined>(undefined);
    activeTheme$ = this.activeThemeSubject.asObservable();
    themeNames: string[] = [];
    themeClassNames: string[] = [];

    constructor(@Inject(DOCUMENT) private document: Document, @Inject(THEME_CONFIG) private themeConfig: ThemeConfig) {
        this.themeConfig.themes.forEach((theme: Theme) => {
            this.themeNames.push(theme.name);
            this.themeClassNames.push(theme.className);
        });
    }

    get activeTheme(): string | undefined {
        return this.activeThemeSubject.getValue();
    }

    set(theme: string): void {
        if (theme === this.activeTheme) {
            return;
        }

        const selectedTheme = this.themeConfig.themes.find((registeredTheme: Theme) => registeredTheme.name === theme);

        if (selectedTheme) {
            this.activeThemeSubject.next(selectedTheme.name);

            this.document.documentElement.classList.remove(...this.themeClassNames);
            this.document.documentElement.classList.add(selectedTheme.className);
        }
    }
}
