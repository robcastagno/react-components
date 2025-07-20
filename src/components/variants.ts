import { tv } from 'tailwind-variants';

export const ButtonVariants = tv({
  base: 'px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  variants: {
    variant: {
      primary: 'bg-blue-500 hover:bg-blue-600',
      secondary: 'bg-gray-500 hover:bg-gray-600',
      danger: 'bg-red-500 hover:bg-red-600',
      success: 'bg-green-500 hover:bg-green-600',
      warning: 'bg-yellow-500 hover:bg-yellow-600',
      invalid: 'bg-purple-500 hover:bg-purple-600',
    },
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    colors: {
      blue: 'bg-blue-500 text-white hover:bg-blue-600',
      gray: 'bg-gray-500 text-white hover:bg-gray-600',
      red: 'bg-red-500 text-white hover:bg-red-600',
      green: 'bg-green-500 text-white hover:bg-green-600',
      yellow: 'bg-yellow-500 text-white hover:bg-yellow-600',
      purple: 'bg-purple-500 text-white hover:bg-purple-600',
    },
    loading: {
      true: 'opacity-75 cursor-wait',
      false: 'opacity-100 cursor-pointer',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      size: 'medium',
      class: 'text-white bg-blue-500 hover:bg-blue-600',
    },
    {
      variant: 'secondary',
      size: 'medium',
      class: 'text-gray-800 bg-gray-200 hover:bg-gray-300',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    radius: 'md',
    colors: 'blue',
    loading: false,
  }
});
