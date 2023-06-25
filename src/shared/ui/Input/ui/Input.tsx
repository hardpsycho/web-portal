import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import { classNames } from 'shared/libs/classNames'
import styles from './Input.m.scss'

export const InputVariant = {
    MAIN: 'main'
} as const

export type InputVariant = (typeof InputVariant)[keyof typeof InputVariant]
type InputType = 'text' | 'tel' | 'password' | 'email'

interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    className?: string
    variant?: InputVariant
    type?: InputType
    onChange?: (x: string) => void
}

export const Input: FC<InputProps> = ({
    className = '',
    variant = InputVariant.MAIN,
    type = 'text',
    value,
    onChange,
    ...otherProps
}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <input
            {...otherProps}
            value={value}
            type={type}
            className={classNames(styles.input, [className, styles[variant]])}
            onChange={onChangeHandler}
        />
    )
}
