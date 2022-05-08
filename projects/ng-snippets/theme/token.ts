import { InjectionToken, Provider } from '@angular/core';
import { ThemeConfig } from './theme.model';

const defaultConfig: Partial<ThemeConfig> = {
    attribute: 'class',
    selector: 'html'
};

export const THEME_CONFIG = new InjectionToken<ThemeConfig>('THEME_CONFIG');

export function provideThemeConfig(config: Partial<ThemeConfig>): Provider {
    return {
        provide: THEME_CONFIG,
        useValue: { ...defaultConfig, ...config }
    };
}
