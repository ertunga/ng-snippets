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

`provideThemeConfig` accepts `ThemeConfig`. By default, value for attribute and selector is 'class' and 'html' respectively.

```typescript
export interface ThemeConfig {
    themes: { name: string; value: string }[];
    attribute: string;
    selector: 'html' | 'body';
}
```

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

<a href="https://github.com/ertunga/ng-snippets/blob/master/projects/ng-snippets/theme/theme.service.ts" target="_blank">Source</a>
