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

<a href="https://github.com/ertunga/ng-snippets/blob/master/projects/ng-snippets/counter/counter.service.ts" target="_blank">Source</a>
