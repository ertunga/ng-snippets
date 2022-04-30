# Theme Service

TODO

## Usage

TODO

<ngs-code-block-with-header>

```html
<p>Current theme: {{ themeService.activeTheme$ | async }}</p>

<button (click)="themeService.set('light')">Light</button>
<button (click)="themeService.set('dark')">Dark</button>
```

</ngs-code-block-with-header>

TODO

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
    --color: #fff;
}
```

## Source

<ngs-code-block-with-header file-name="theme.service.ts">

```typescript
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
```

</ngs-code-block-with-header>
