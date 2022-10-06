import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
    let service: CounterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CounterService);
    });

    it('should increase', () => {
        service.increase();
        expect(service.count).toBe(1);
    });

    it('should increase by given number', () => {
        service.increase(5);
        expect(service.count).toBe(5);
    });

    it('should decrease', () => {
        service.decrease();
        expect(service.count).toBe(-1);
    });

    it('should decrease by given number', () => {
        service.decrease(6);
        expect(service.count).toBe(-6);
    });

    it('should reset counter', () => {
        service.count = 30;
        service.reset();
        expect(service.count).toBe(0);
    });

    it('should returns count', () => {
        expect(service.count).toBe(0);
    });

    it('should sets count', () => {
        service.count = 100;
        expect(service.count).toBe(100);
    });
});
