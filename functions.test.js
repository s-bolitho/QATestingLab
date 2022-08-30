let testFunctions = require('./functions')

test('returnTwo should return integer 2', () => {
    expect(testFunctions.returnTwo()).toBe(2)
})

test('greeting should return "Hello James"', () => {
    expect(testFunctions.greeting('James')).toBe('Hello James')
})

test('greeting should return "Hello Jill"', () => {
    expect(testFunctions.greeting('Jill')).toBe('Hello Jill')
})

test('add should return sum of num1 and num2', () => {
    expect(testFunctions.add(1, 2)).toBe(3)
})

test('add should return sum of num1 and num2', () => {
    expect(testFunctions.add(5, 9)).toBe(14)
})

describe('extra lab challenge', () => {
    test('multiply should return 9', () => {
        expect(testFunctions.multiply(3, 3)).toBe(9)
    })

    test('divide should return 9', () => {
        expect(testFunctions.divide(18, 2)).toBe(9)
    })

    test('subtract should return 9', () => {
        expect(testFunctions.subtract(9, 0)).toBe(9)
    })
})