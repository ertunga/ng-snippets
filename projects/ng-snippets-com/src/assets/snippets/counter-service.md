# Counter Service

Pretty much a hello world example for services. The counter service holds the `count` variable and
increment, decrement and set methods to change its value.

<ngs-code-block-with-header file-name="counter.service.ts">

```typescript
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterService {
	count = 0;

	increase(delta = 1): void {
		this.count += delta;
	}

	decrease(delta = 1): void {
		this.count -= delta;
	}

	set(value: number): void {
		this.count = value;
	}

	reset(): void {
		this.count = 0;
	}
}

```

</ngs-code-block-with-header>

## Usage

Just inject it into a component/service/directive/pipe/guard.
Let's see an example in a component.

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

In the component template, `count` variable can be used to display the current value.

<ngs-code-block-with-header>

```html
<p>Count: {{ counterService.count }}</p>

<button (click)="counterService.increase()">Increase</button>
<button (click)="counterService.increase(7)">Increase by 7</button>
<button (click)="counterService.decrease()">Decrease</button>
<button (click)="counterService.decrease(7)">Decrease by 7</button>
<button (click)="counterService.set(100)">Set to 100</button>
<button (click)="counterService.reset()">Reset</button>
```

</ngs-code-block-with-header>
