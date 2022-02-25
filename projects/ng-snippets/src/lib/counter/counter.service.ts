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
