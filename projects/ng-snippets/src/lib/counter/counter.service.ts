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
