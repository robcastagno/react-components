import { tv } from 'tailwind-variants';

export const ButtonVariants = tv({
  base: 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    variant: {
      Primary: 'bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500',
      Secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 outline-2 outline-color-black',
      Danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm shadow-red-500/75',
      Invalid: 'bg-red-100 text-red-800 hover:bg-red-200 focus:ring-red-500',
      Success: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500',
      Warning: 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500'
    },
    size: {
      Small: 'text-sm px-3 py-2',
      Medium: 'text-base px-4 py-2',
      Large: 'text-lg px-5 py-3'
    },
    radius: {
      None: 'rounded-none',
      Small: 'rounded-sm',
      Medium: 'rounded-md',
      Large: 'rounded-lg',
      Full: 'rounded-full'
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  compoundVariants: [
    {
      variant: ['Primary', 'Secondary', 'Danger', 'Invalid', 'Success', 'Warning'],
      disabled: true,
      class: 'bg-gray-200 text-gray-400',
    },
  ],
  defaultVariants: {
    variants: 'Primary',
    sizes: 'Medium',
    radius: 'Medium',
    disabled: false
  }
});
