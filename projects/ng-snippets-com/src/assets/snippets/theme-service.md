# Theme Service

A great service to theme your app.

<ngs-code-block-with-header fileName="theme.service.ts">

```typescript
export enum Theme {
	LIGHT = 'light',
	ELEGANT = 'elegant',
	DARK = 'dark'
}

@Injectable({
	providedIn: 'root'
})
export class ThemeService {

	private activeThemeSubject = new BehaviorSubject<Theme | undefined>(undefined);
	public activeTheme$ = this.activeThemeSubject.asObservable();
	
	get activeTheme(): Theme | undefined {
		return this.activeThemeSubject.getValue();
	}

	constructor(@Inject(DOCUMENT) private document: Document) {
		this.set(Theme.LIGHT);
	}

	set(theme: Theme): void {
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

## Usage

This is how you use it.

<ngs-code-block-with-header>

```html
<button (click)="themeService.set(Theme.LIGHT)">Light theme</button>
<button (click)="themeService.set(Theme.ELEGANT)">Elegant theme</button>
<button (click)="themeService.set(Theme.DARK)">Dark theme</button>

<p>Active theme: {{ themeService.activeTheme }}</p>
```

</ngs-code-block-with-header>
