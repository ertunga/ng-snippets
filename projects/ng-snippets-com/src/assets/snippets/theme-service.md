# Theme Service

Provide themes for your application by toggling classes or attributes.

## Usage

Configure the service using `provideThemeConfig` method in app module. Here is an example configuration
that will set 'light-theme' or 'dark-theme' CSS class for light and dark themes. By default, `<html>` is the target element.

<ngs-code-block-with-header file-name="app.module.ts">

```
providers: [
    provideThemeConfig({
        themes: [
            { name: 'light', value: 'light-theme' },
            { name: 'dark', value: 'dark-theme' }
        ]
    })
]
```

</ngs-code-block-with-header>

Create CSS classes for the configured themes, preferably in the global CSS file.
If you are using SCSS that would be the `styles.scss` under src.

<ngs-code-block-with-header file-name="styles.scss">

```css
.light-theme {
    --primary: #38bdf8;
    --accent: #f472b6;
    --background-color-1: #fff;
    --background-color-2: #f3f4f5;
    --color: #0f172a;
}

.dark-theme {
    --primary: #38bdf8;
    --accent: #5b21b6;
    --background-color-1: #0f172a;
    --background-color-2: #334155;
    --color: #f9fafb;
}
```

</ngs-code-block-with-header>

After injecting `ThemeService`, you can start using it. Here is an example in the
component's template.

<ngs-code-block-with-header>

```html
<p>Current theme: {{ themeService.activeTheme$ | async }}</p>

<button (click)="themeService.set('light')">Light</button>
<button (click)="themeService.set('dark')">Dark</button>
```

</ngs-code-block-with-header>

## Source

<ngs-code-block-with-header file-name="theme.service.ts">

```typescript
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { THEME_CONFIG } from './token';
import { ThemeConfig } from './theme.model';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private activeThemeSubject = new BehaviorSubject<string | undefined>(undefined);
    activeTheme$ = this.activeThemeSubject.asObservable();
    themeNames: string[] = [];
    themeValues: string[] = [];

    constructor(@Inject(THEME_CONFIG) private themeConfig: ThemeConfig) {
        this.themeConfig.themes.forEach((theme) => {
            this.themeNames.push(theme.name);
            this.themeValues.push(theme.value);
        });
    }

    get activeTheme(): string | undefined {
        return this.activeThemeSubject.getValue();
    }

    set(theme: string): void {
        if (theme === this.activeTheme) {
            return;
        }

        const element = document.querySelector(this.themeConfig.selector);
        if (!element) {
            return;
        }

        const selectedTheme = this.themeConfig.themes.find((registeredTheme) => registeredTheme.name === theme);
        if (!selectedTheme) {
            return;
        }

        this.activeThemeSubject.next(selectedTheme.name);

        if (this.themeConfig.attribute === 'class') {
            element.classList.remove(...this.themeValues);
            element.classList.add(selectedTheme.value);
        } else {
            element.setAttribute(this.themeConfig.attribute, selectedTheme.value);
        }
    }
}
```

</ngs-code-block-with-header>
