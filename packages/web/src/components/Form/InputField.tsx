import clsx from 'clsx'
import type { UseFormRegisterReturn } from 'react-hook-form'

import type { FieldWrapperPassThroughProps } from './FieldWrapper'
import { FieldWrapper } from './FieldWrapper'

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password'
  className?: string
  registration: Partial<UseFormRegisterReturn>
}

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, error } = props
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  )
}
