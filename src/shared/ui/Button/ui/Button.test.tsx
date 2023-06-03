import { render, screen } from '@testing-library/react'
import { Button, ButtonVariant } from './Button'

describe('Button', () => {
    test('first test', () => {
        render(<Button>Тест</Button>)
        expect(screen.getByText('Тест')).toBeInTheDocument()
    })
    test('class clear', () => {
        render(<Button className={ButtonVariant.CLEAR}>Тест</Button>)
        expect(screen.getByText('Тест')).toHaveClass('clear')
    })
})
