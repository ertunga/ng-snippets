# Counter Service

Pretty much a hello world example for services. The counter service holds the `count` state and
provides some methods to change its value.

## Usage

Just inject the service into a component/service/directive/pipe/guard.
Here is an example in a component.

<ngs-code-block-with-header>

```typescript
@Component({
    ...
})
export class SomeComponent {

	constructor(public counterService: CounterService) { }
}
```

</ngs-code-block-with-header>

You can use the service in the component's `.ts` file and in its template.

<ngs-code-block-with-header>

```html
<p>Count: {{ counterService.count }}</p>

<button (click)="counterService.increase()">Increase by 1</button>
<button (click)="counterService.increase(7)">Increase by 7</button>
<button (click)="counterService.decrease()">Decrease by 1</button>
<button (click)="counterService.decrease(7)">Decrease by 7</button>
<button (click)="counterService.count = 100">Set to 100</button>
<button (click)="counterService.reset()">Reset</button>
```

</ngs-code-block-with-header>

## Source

<ngs-code-block-with-header file-name="counter.service.ts">

```typescript
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterService {
	private _count = 0;

	increase(delta = 1): void {
		this._count += delta;
	}

	decrease(delta = 1): void {
		this._count -= delta;
	}

	reset(): void {
		this._count = 0;
	}

	get count(): number {
		return this._count;
	}

	set count(value: number) {
		this._count = value;
	}
}

```

</ngs-code-block-with-header>

