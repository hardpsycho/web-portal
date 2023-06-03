import { classNames } from 'shared//libs/classNames'

describe('classNames', () => {
    test('with the main class', () => {
        const expected = 'mainClass'
        expect(classNames('mainClass')).toBe(expected)
    })

    test('with additional classes', () => {
        const expected = 'mainClass addClass1 addClass2'
        expect(classNames('mainClass', ['addClass1', 'addClass2'])).toBe(
            expected
        )
    })

    test('with mods', () => {
        const expected = 'mainClass addClass1 addClass2 modClass1 modClass3'
        expect(
            classNames('mainClass', ['addClass1', 'addClass2'], {
                modClass1: true,
                modClass2: false,
                modClass3: true
            })
        ).toBe(expected)
    })

    test('with empty string', () => {
        const expected = 'addClass1 addClass2 modClass1 modClass3'
        expect(
            classNames('', ['addClass1', 'addClass2'], {
                modClass1: true,
                modClass2: false,
                modClass3: true
            })
        ).toBe(expected)
    })
})
