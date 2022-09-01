import { TruncateWordsPipe } from './truncate-words.pipe';

describe('TruncateWordsPipe', () => {
    describe('transform', () => {
        let pipe: TruncateWordsPipe;
        const testCases = [
            {
                expectation: 'should truncate text',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                wordCount: 4,
                expected: 'Lorem ipsum dolor sit...'
            },
            {
                expectation: 'should truncate text shorter than word count ',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                wordCount: 20,
                expected: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            },
            {
                expectation: 'should truncate text with custom suffix',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                wordCount: 5,
                suffix: '--',
                expected: 'Lorem ipsum dolor sit amet,--'
            },
            { expectation: 'should not truncate text if it is empty', value: '', wordCount: 7, suffix: '___', expected: '' }
        ];

        beforeEach(() => {
            pipe = new TruncateWordsPipe();
        });

        testCases.forEach((testCase) => {
            it(testCase.expectation, () => {
                expect(pipe.transform(testCase.value, testCase.wordCount, testCase?.suffix)).toBe(testCase.expected);
            });
        });
    });
});
