/* eslint-disable react-refresh/only-export-components */
import { ComponentProps } from 'react'
import { VariantProps } from "class-variance-authority"
import { twMerge } from 'tailwind-merge'
import { buttonStyles } from './buttonStyles'



type ButtonProps = VariantProps<typeof buttonStyles> & 
ComponentProps<"button">

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button 
    {...props} 
    className={twMerge(buttonStyles({variant, size}), className)}
    />
    )
}
