import { InjectionToken, Provider } from '@angular/core';

export interface Theme {
    name: string;
    className: string;
}

export interface ThemeConfig {
    themes: Theme[];
    options?: any;
}

export const THEME_CONFIG = new InjectionToken<ThemeConfig>('THEME_CONFIG');

export function provideThemeConfig(themeConfig: ThemeConfig): Provider {
    return {
        provide: THEME_CONFIG,
        useValue: themeConfig
    };
}
