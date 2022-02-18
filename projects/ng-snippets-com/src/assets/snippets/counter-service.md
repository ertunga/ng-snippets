# Counter Service

Pretty much a hello world example for services. The counter service holds the `count` variable and
increment, decrement and set methods to change its value.

<ngs-code-block-with-header fileName="counter.service.ts">

```typescript
import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterService {

	count = 0;

	increment(): void {
		this.count += 1;
	}

	decrement(): void {
		this.count -= 1;
	}

	set(value: number): void {
		this.count = value;
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

<button (click)="counterService.increment()">Increase by 1</button>
<button (click)="counterService.decrement()">Decrease by 1</button>
```

</ngs-code-block-with-header>
