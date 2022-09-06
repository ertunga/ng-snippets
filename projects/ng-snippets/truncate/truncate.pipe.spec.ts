import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
    describe('transform', () => {
        let pipe: TruncatePipe;
        const testCases = [
            {
                expectation: 'should truncate text',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                truncationLength: 10,
                expected: 'Lorem ipsu...'
            },
            {
                expectation: 'should truncate text with custom suffix',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                truncationLength: 10,
                suffix: '--',
                expected: 'Lorem ipsu--'
            }
        ];

        const errorTestCases = [
            {
                expectation: 'should throw error if truncation length is equal to 0',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                truncationLength: 0,
                expected: new Error('Truncation length must be larger than 0')
            },
            {
                expectation: 'should throw error if truncation length is less than 0',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                truncationLength: -1,
                expected: new Error('Truncation length must be larger than 0')
            }
        ];

        beforeEach(() => {
            pipe = new TruncatePipe();
        });

        testCases.forEach((testCase) => {
            it(testCase.expectation, () => {
                expect(pipe.transform(testCase.value, testCase.truncationLength, testCase?.suffix)).toBe(testCase.expected);
            });
        });

        errorTestCases.forEach((testCase) => {
            it(testCase.expectation, () => {
                expect(() => pipe.transform(testCase.value, testCase.truncationLength)).toThrow(testCase.expected);
            });
        });
    });
});
