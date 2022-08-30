import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
    let pipe: JoinPipe;
    const testCases = [
        { expectation: 'join string array', array: ['test1', 'test2', 'test3'], expected: 'test1, test2, test3' },
        {
            expectation: 'join string array with - separator',
            array: ['test1', 'test2', 'test3'],
            separator: '-',
            expected: 'test1-test2-test3'
        },
        { expectation: 'join number array', array: [1, -4, 100, 0], expected: '1, -4, 100, 0' },
        { expectation: 'join number array with - separator', array: [1, -4, 100, 0], separator: '-', expected: '1--4-100-0' },
        { expectation: 'join empty array', array: [], expected: '' },
        { expectation: 'join empty array with - separator', array: [], separator: '-', expected: '' }
    ];

    beforeEach(() => {
        pipe = new JoinPipe();
    });

    testCases.forEach((testCase) => {
        it(testCase.expectation, () => {
            expect(pipe.transform(testCase.array, testCase?.separator)).toBe(testCase.expected);
        });
    });
});
