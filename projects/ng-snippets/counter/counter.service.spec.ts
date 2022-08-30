import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
    let service: CounterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CounterService);
    });

    it('increase', () => {
        service.increase();
        expect(service.count).toBe(1);
    });

    it('increase by given number', () => {
        service.increase(5);
        expect(service.count).toBe(5);
    });

    it('decrease', () => {
        service.decrease();
        expect(service.count).toBe(-1);
    });

    it('decrease by given number', () => {
        service.decrease(6);
        expect(service.count).toBe(-6);
    });

    it('reset counter', () => {
        service.count = 30;
        service.reset();
        expect(service.count).toBe(0);
    });

    it('returns count', () => {
        expect(service.count).toBe(0);
    });

    it('sets count', () => {
        service.count = 100;
        expect(service.count).toBe(100);
    });
});
