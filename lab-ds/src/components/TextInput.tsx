import { ReactNode } from 'react';
import clsx from 'clsx';

export interface TextInputProps {
}

export function TextInput({  }: TextInputProps) {
  return (
    <input 
      className={clsx(
        'py-4 px-3 rounded bg-grey-800 w-full text-grey-100 text-xs placeholder:text-grey-400', 
      )}
    />
  )
}