import { Injectable } from '@angular/core';

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
